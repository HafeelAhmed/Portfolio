/*
 * Pre-renders every page of the built site to static HTML.
 *
 * Runs automatically after `npm run build` (the "postbuild" script). It serves
 * build/ locally, opens the site in a headless Chrome or Edge, follows every
 * internal link, and saves each page as build/<route>/index.html. That way:
 *   - GitHub Pages returns a real page (not a 404) when a URL is opened directly,
 *   - search engines and link previews get the full text and meta tags
 *     without running JavaScript.
 * It also writes build/404.html and build/sitemap.xml.
 *
 * Browser: set PRERENDER_BROWSER to a Chrome/Edge executable, or it looks in the
 * usual Windows, macOS and Linux install locations.
 */
const fs = require("fs");
const http = require("http");
const path = require("path");
const puppeteer = require("puppeteer-core");

const BUILD = path.join(__dirname, "..", "build");
const BASE = "/Portfolio";
const SITE_URL = "https://hafeelahmed.github.io/Portfolio";
const NOT_FOUND_ROUTE = `${BASE}/__not-found__`;

const BROWSER_CANDIDATES = [
	process.env.PRERENDER_BROWSER,
	"C:/Program Files/Google/Chrome/Application/chrome.exe",
	"C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
	"C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
	"C:/Program Files/Microsoft/Edge/Application/msedge.exe",
	"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
	"/usr/bin/google-chrome",
	"/usr/bin/chromium",
	"/usr/bin/chromium-browser",
].filter(Boolean);

const MIME = {
	".html": "text/html; charset=utf-8",
	".js": "application/javascript",
	".css": "text/css",
	".json": "application/json",
	".png": "image/png",
	".jpg": "image/jpeg",
	".ico": "image/x-icon",
	".svg": "image/svg+xml",
	".mp4": "video/mp4",
	".txt": "text/plain",
};

function findBrowser() {
	return BROWSER_CANDIDATES.find((p) => fs.existsSync(p));
}

// Serves build/ under /Portfolio. Any route without a file gets the original
// app shell, like a single-page-app dev server would.
function startServer(shell) {
	const server = http.createServer((req, res) => {
		const urlPath = decodeURIComponent(req.url.split("?")[0]);
		if (urlPath.startsWith(BASE)) {
			const rel = urlPath.slice(BASE.length) || "/";
			const file = path.join(BUILD, rel);
			if (path.extname(file) && fs.existsSync(file) && fs.statSync(file).isFile()) {
				res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
				fs.createReadStream(file).pipe(res);
				return;
			}
		}
		res.writeHead(200, { "Content-Type": MIME[".html"] });
		res.end(shell);
	});
	return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

// "/Portfolio/about" -> build/about/index.html, "/Portfolio" -> build/index.html
function outputFile(route) {
	const rel = route.slice(BASE.length).replace(/^\/+|\/+$/g, "");
	return path.join(BUILD, rel, "index.html");
}

function normalise(href) {
	const p = href.split("#")[0].split("?")[0].replace(/\/+$/, "");
	return p || BASE;
}

async function renderPage(browser, origin, route) {
	const page = await browser.newPage();
	await page.setRequestInterception(true);
	page.on("request", (req) => {
		// Images and video aren't needed to get the HTML.
		if (["image", "media", "font"].includes(req.resourceType())) req.abort();
		else req.continue();
	});
	await page.goto(origin + route, { waitUntil: "networkidle0", timeout: 30000 });
	await page.waitForSelector("#root *", { timeout: 10000 });
	// Give Helmet a moment to write the <head> tags.
	await new Promise((r) => setTimeout(r, 300));

	const html = await page.content();
	const links = await page.$$eval("a[href]", (as) => as.map((a) => a.getAttribute("href")));
	const title = await page.title();
	await page.close();
	return { html, links, title };
}

function writeSitemap(routes) {
	const today = new Date().toISOString().slice(0, 10);
	const urls = routes
		.map((r) => {
			const rel = r.slice(BASE.length).replace(/\/+$/, "");
			return `  <url><loc>${SITE_URL}${rel}/</loc><lastmod>${today}</lastmod></url>`;
		})
		.join("\n");
	fs.writeFileSync(
		path.join(BUILD, "sitemap.xml"),
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
	);
}

async function main() {
	const shellPath = path.join(BUILD, "index.html");
	if (!fs.existsSync(shellPath)) {
		console.error("prerender: build/index.html not found. Run `npm run build` first.");
		process.exit(1);
	}
	const executablePath = findBrowser();
	if (!executablePath) {
		console.warn(
			"prerender: no Chrome or Edge found, so pages were NOT pre-rendered.\n" +
				"Set PRERENDER_BROWSER to a Chrome/Edge executable and build again.",
		);
		process.exit(1);
	}

	const shell = fs.readFileSync(shellPath, "utf-8");
	const server = await startServer(shell);
	const origin = `http://127.0.0.1:${server.address().port}`;
	const browser = await puppeteer.launch({ executablePath, headless: true });

	const queue = [BASE];
	const seen = new Set(queue);
	const rendered = [];
	try {
		while (queue.length) {
			const route = queue.shift();
			const { html, links, title } = await renderPage(browser, origin, route);
			const file = outputFile(route);
			fs.mkdirSync(path.dirname(file), { recursive: true });
			fs.writeFileSync(file, html);
			rendered.push(route);
			console.log(`prerender: ${route}  ->  "${title}"`);

			for (const href of links) {
				if (!href || !href.startsWith(BASE)) continue;
				const next = normalise(href);
				if (!seen.has(next) && !path.extname(next)) {
					seen.add(next);
					queue.push(next);
				}
			}
		}

		const notFound = await renderPage(browser, origin, NOT_FOUND_ROUTE);
		fs.writeFileSync(path.join(BUILD, "404.html"), notFound.html);
		console.log(`prerender: 404.html  ->  "${notFound.title}"`);
	} finally {
		await browser.close();
		server.close();
	}

	writeSitemap(rendered);
	console.log(`prerender: ${rendered.length} pages and sitemap.xml written.`);
}

main().catch((err) => {
	console.error("prerender failed:", err);
	process.exit(1);
});
