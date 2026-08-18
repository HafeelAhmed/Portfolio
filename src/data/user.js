import { getArticleLink } from "./links";

const INFO = {
	main: {
		title: "Portfolio of Hafeel",
		name: "Hafeel Ahmed S",
		email: "hafeelahmed06@gmail.com",
		logo: "/Portfolio/logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/",
		linkedin: "https://www.linkedin.com/in/hafeel-ahmed-43a611243/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
		discord: "https://discord.com/users/762168287605424150"
	},

	homepage: {
	title: "Gameplay Programmer and Unreal Engine developer, building systems that bring games to life.",
	description:
	"I am a Gameplay Programmer with over 3 years of experience working with Unreal Engine 5. I have extensive knowledge in developing gameplay systems, mechanics, and multiplayer experiences using C++ and Blueprints. I love tackling difficult technical challenges, designing systems from the ground up, and bringing ideas to life through code. Constant learning and self-improvement are essential parts of my development as a programmer.",
	},

	about: {
	title: "Hello, I’m Hafeel Ahmed, I build gameplay systems and bring ideas to life.",
	description:(
		<>
			Hello, this is <strong>Hafeel</strong>, a Gameplay Programmer with
			over 3 years of experience working with <strong>Unreal Engine 5</strong>.
			My main areas of expertise are gameplay systems, mechanics, and
			multiplayer development using C++ and Blueprints.

			<br />
			<br />

			I hold a B.Tech in Computer Science and Engineering, specializing in
			Artificial Intelligence and Machine Learning. I enjoy solving
			technical problems and turning ideas into engaging gameplay
			experiences.

			<br />
			<br />

			My main interests include <strong>gameplay programming</strong>,
			systems design, and multiplayer networking.

			<br />
			<br />

			Outside of game development, I enjoy reading Manhwa and exploring
			topics like physics, jet engines, and science fiction.
		</>
	),
	},

	projects: [
		{
			title: "Ares2192",
			description: "Racing on Teraformed mars",
			tech: "Unreal Engine 5 • C++ • Blueprint",
			engine: "UE5",
			image: "../Portfolio/images/Ares/AresThumbnail.jpg",
			link: getArticleLink("ares2192"),
			isExternal: false,
		},

		
	],
};

export default INFO;