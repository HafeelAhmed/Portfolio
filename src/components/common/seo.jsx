import React from "react";
import { Helmet } from "react-helmet";

import INFO from "../../data/user";

export const SITE_URL = "https://hafeelahmed.github.io/Portfolio";
const DEFAULT_IMAGE = "/Portfolio/og.png";
// The name people search for; INFO.main.name keeps the full "Hafeel Ahmed S".
const DISPLAY_NAME = "Hafeel Ahmed";

// Turns "/Portfolio/about" into "https://hafeelahmed.github.io/Portfolio/about/".
// Every pre-rendered page lives at <route>/index.html, so the trailing-slash
// form is the URL GitHub Pages actually serves.
const absoluteUrl = (path) => {
	const clean = path.replace(/^\/Portfolio/, "").replace(/\/+$/, "");
	return `${SITE_URL}${clean}/`;
};

const absoluteAsset = (src) =>
	src.startsWith("http")
		? src
		: `https://hafeelahmed.github.io${src.startsWith("/") ? "" : "/"}${src}`;

const Seo = ({
	title,
	description,
	path,
	image = DEFAULT_IMAGE,
	type = "website",
	keywords,
	noindex = false,
	jsonLd,
}) => {
	const fullTitle = title ? `${title} | ${DISPLAY_NAME}` : INFO.main.title;
	const url = absoluteUrl(path);
	const imageUrl = absoluteAsset(image);

	return (
		<Helmet>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			{keywords && keywords.length > 0 && (
				<meta name="keywords" content={keywords.join(", ")} />
			)}
			{noindex && <meta name="robots" content="noindex" />}
			{!noindex && <link rel="canonical" href={url} />}

			<meta property="og:type" content={type} />
			<meta property="og:site_name" content={DISPLAY_NAME} />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={imageUrl} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageUrl} />

			{jsonLd && (
				<script type="application/ld+json">
					{JSON.stringify(jsonLd)}
				</script>
			)}
		</Helmet>
	);
};

// Structured data describing the person behind the site.
export const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: DISPLAY_NAME,
	alternateName: INFO.main.name,
	jobTitle: "Gameplay Programmer",
	url: `${SITE_URL}/`,
	image: absoluteAsset("/Portfolio/DP.png"),
	worksFor: { "@type": "Organization", name: "Tenderizer Games" },
	address: {
		"@type": "PostalAddress",
		addressLocality: "Thanjavur",
		addressRegion: "Tamil Nadu",
		addressCountry: "IN",
	},
	knowsAbout: ["Unreal Engine 5", "C++", "Blueprints", "Game AI"],
	sameAs: [INFO.socials.linkedin, INFO.socials.github],
};

export default Seo;
