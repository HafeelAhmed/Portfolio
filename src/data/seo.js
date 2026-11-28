// Title, description and URL path for each top-level page.
// Article pages take theirs from the article or project data.
const SEO = [
	{
		page: "home",
		path: "/Portfolio",
		// Empty title: the homepage uses INFO.main.title as is.
		title: "",
		description:
			"Hafeel Ahmed is a gameplay programmer and Unreal Engine 5 developer based in Thanjavur, Tamil Nadu, India. He works in C++ and Blueprints, currently on AI and navigation for ARES 2192 at Tenderizer Games.",
		keywords: [
			"Hafeel Ahmed",
			"Gameplay Programmer",
			"Unreal Engine developer",
			"Unreal Engine 5",
			"C++",
			"Game Developer India",
			"Tamil Nadu",
		],
	},

	{
		page: "about",
		path: "/Portfolio/about",
		title: "About",
		description:
			"About Hafeel Ahmed, a gameplay programmer and Unreal Engine developer in Thanjavur, Tamil Nadu, India, with three years of Unreal Engine 5 experience in C++ and Blueprints.",
		keywords: [
			"Hafeel Ahmed",
			"Gameplay Programmer",
			"Unreal Engine developer India",
			"Unreal Engine 5",
			"C++",
		],
	},

	{
		page: "articles",
		path: "/Portfolio/articles",
		title: "Project write-ups",
		description: "Write-ups of game and C++ projects by Hafeel Ahmed.",
		keywords: ["Hafeel Ahmed", "Game Development", "Unreal Engine 5"],
	},

	{
		page: "projects",
		path: "/Portfolio/projects",
		title: "Projects",
		description:
			"Games, prototypes and C++ simulation projects by Hafeel Ahmed, a gameplay programmer in Thanjavur, India, mostly built in Unreal Engine 5 with C++ and Blueprints.",
		keywords: [
			"Hafeel Ahmed",
			"Game Projects",
			"Unreal Engine 5",
			"C++",
			"Blueprints",
		],
	},

	{
		page: "contact",
		path: "/Portfolio/contact",
		title: "Contact",
		description:
			"Contact Hafeel Ahmed, gameplay programmer and Unreal Engine developer based in Thanjavur, Tamil Nadu, India.",
		keywords: ["Hafeel Ahmed", "Contact", "Game Developer"],
	},
];

export default SEO;
