import { getArticleLink } from "./links";

const INFO = {
	main: {
		title: "Hafeel Ahmed | Gameplay Programmer, Unreal Engine 5",
		name: "Hafeel Ahmed S",
		email: "hafeelahmed06@gmail.com",
		logo: "/Portfolio/logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/HafeelAhmed",
		linkedin: "https://www.linkedin.com/in/hafeel-ahmed-43a611243/",
		instagram: "https://instagram.com/hafeel_ahmed",
		stackoverflow: "https://stackoverflow.com/users/14559506/hafee",
		facebook: "https://facebook.com/hafee.ahmed",
		discord: "https://discord.com/users/762168287605424150",
	},

	homepage: {
		title: "Gameplay Programmer & Unreal Engine Developer",
		description:
			"I write gameplay code in Unreal Engine 5, in C++ and Blueprints. Right now I'm at Tenderizer Games, working on AI and navigation for ARES 2192. I'm based in Thanjavur, Tamil Nadu, India.",
		// Projects shown on the homepage, in this order.
		featured: ["ares2192", "momentum-cube", "life-simulator"],
	},

	about: {
		title: "Hafeel Ahmed, gameplay programmer",
		description: (
			<>
				I'm a gameplay programmer and Unreal Engine developer based in
				Thanjavur, Tamil Nadu, India. I've spent a little over
				three years building games in <strong>Unreal Engine 5</strong>,
				mostly in <strong>C++ and Blueprints</strong>.
				<br />
				<br />
				I currently work at <strong>Tenderizer Games</strong> on{" "}
				<strong>ARES 2192</strong>, a sci-fi racer. I work on its AI and
				navigation, which covers vehicle AI, car pathfinding, NPC
				behaviour and a Buddy AI companion. I've also made the space
				station hub easier to find your way around.
				<br />
				<br />
				I have a B.Tech in Computer Science and Engineering, specialised
				in AI and Machine Learning. Outside Unreal I write plain C++,
				like Grid Evolution, an artificial-life simulation where small
				neural networks learn to survive through mutation and
				selection.
				<br />
				<br />
				When I build a mechanic I block it out with basic shapes first
				and lean on print statements to see what each part is doing.
				When something breaks, I go back through the logs until I find
				where it started. Working on my own taught me to pick ideas I
				can actually finish, and to put mechanics on a shared base
				class so the next one is cheap to add.
				<br />
				<br />
				Outside of work I read manhwa, and I like reading about
				physics, jet engines and science fiction.
			</>
		),
	},

	/*
	 * Projects.
	 *
	 * A project with a hand-written article in src/data/AllArticles uses the
	 * same slug as that article. Every other project gets its detail page
	 * built from the fields below (see components/projects/projectArticle.jsx).
	 */
	projects: [
		{
			slug: "ares2192",
						title: "ARES 2192",
			description:
				"Sci-fi racer with a space station hub and races on a terraformed Mars. I work on its vehicle AI, NPCs and navigation.",
			tech: "Unreal Engine 5 • C++ • Blueprints",
			engine: "UE5",
			image: "/Portfolio/images/Ares/AresThumbnail.jpg",
			link: getArticleLink("ares2192"),
		},
		{
			slug: "grid-evolution",
						title: "Grid Evolution",
			description:
				"Artificial-life simulation in C++17 and raylib. Small neural networks learn to forage and survive through mutation and selection.",
			tech: "C++17 • raylib • OpenCL",
			engine: "C++",
			image: "/Portfolio/images/grid-evolution/trained.jpg",
			link: getArticleLink("grid-evolution"),
		},
		{
			slug: "life-simulator",
			title: "Life Simulator",
			description:
				"My Grid Evolution simulation running in Unreal Engine 5, in 3D and with smooth movement instead of a grid.",
			tech: "Unreal Engine 5 • C++20",
			engine: "UE5",
			image: "/Portfolio/images/life-simulator/start.jpg",
			link: getArticleLink("life-simulator"),
		},
		{
			slug: "dragon-scout",
						title: "Dragon Scout",
			description:
				"An enemy AI prototype built on AI Perception and Behavior Trees. The enemy patrols, spots the player, chases them and attacks.",
			tech: "Unreal Engine 5 • Behavior Trees • AI Perception",
			engine: "UE5",
			image: "/Portfolio/images/projects/dragon-scout.jpg",
			video: "/Portfolio/videos/dragon-scout.mp4",
			link: getArticleLink("dragon-scout"),
			type: "Prototype",
			role: "Gameplay programmer, level designer",
			tools: [
				"Unreal Engine 5",
				"Blueprints",
				"AI Perception",
				"Behavior Trees",
				"Blackboard",
			],
			overview: [
				"A small prototype to practise enemy AI. A humanoid enemy scouts the area, notices the player with AI Perception, chases them and attacks when in range.",
			],
			contributions: [
				"Set up AI Perception (sight) so the enemy can detect and keep track of the player.",
				"Built the Behavior Tree that moves the enemy between scouting, chasing and attacking.",
				"Wrote custom tasks for movement, turning to face the player and triggering attacks.",
			],
			process: [
				"The Blackboard holds the player's last known location and whether the player is currently seen. The Behavior Tree reads those keys to decide which branch runs: scout when nothing is known, chase when the player is seen, attack when close enough.",
				"Most of the time went into tuning perception ranges, the behaviour flow and attack cooldowns until the enemy felt reactive.",
			],
		},
		{
			slug: "choose-your-side",
						title: "Choose Your Side",
			description:
				"A multiplayer prototype where players host or join a session, pick Red or Blue in the lobby and spawn into the match on that team.",
			tech: "Unreal Engine 5 • Online Subsystem • Replication",
			engine: "UE5",
			image: "/Portfolio/images/projects/choose-your-side.jpg",
			video: "/Portfolio/videos/choose-your-side.mp4",
			link: getArticleLink("choose-your-side"),
			type: "Prototype",
			role: "Gameplay programmer",
			tools: [
				"Unreal Engine 5",
				"Blueprints",
				"Online Subsystem",
				"Replication",
			],
			overview: [
				"A prototype of the basic multiplayer flow. Players create or join a session, choose a team in the lobby and start the match, and every client agrees on who is on which side.",
			],
			contributions: [
				"Hosting and joining sessions through the Online Subsystem.",
				"Lobby UI for picking Red or Blue and marking yourself ready.",
				"Replicating each player's team so all clients see the same assignments.",
				"Moving everyone from the lobby into the match with their team intact.",
			],
			process: [
				"Each player's team is a replicated variable. The GameMode, PlayerState and GameState manage the assignments between them, from the lobby through to the start of the match.",
			],
		},
		{
			slug: "momentum-cube",
						title: "Momentum Cube",
			description:
				"Puzzle game with moving platforms, lasers and destructible blocks, all built on one reusable mechanic base class.",
			tech: "Unreal Engine 5 • C++ • Blueprints",
			engine: "UE5",
			image: "/Portfolio/images/projects/momentum-cube.jpg",
			video: "/Portfolio/videos/momentum-cube.mp4",
			link: getArticleLink("momentum-cube"),
			type: "Game",
			role: "Gameplay programmer",
			tools: ["Unreal Engine 5", "C++", "Blueprints"],
			overview: [
				"A puzzle game where you move a cube through levels built from a handful of mechanics: moving platforms, lasers, kill zones and destructible actors.",
			],
			contributions: [
				"A base mechanic Blueprint class that every puzzle element inherits from.",
				"Moving platforms driven by their own path and timing maths.",
				"Lasers that kill the player or destroy actors they hit, with a dissolve effect.",
				"Collision responses and feedback so the player can tell what just happened.",
			],
			process: [
				"I started with the base class, so a new mechanic only has to add its own behaviour. That made new levels quick to put together.",
				"The laser casts a ray from its origin and spawns the beam mesh. If the ray hits the player or a destructible actor, it plays a dissolve and destroys it.",
			],
		},
		{
			slug: "escape-protocol",
						title: "Escape Protocol",
			description:
				"A small escape game inspired by Among Us. You finish tasks around a spaceship to get out.",
			tech: "Unreal Engine 5 • Blueprints • MetaSounds",
			engine: "UE5",
			image: "/Portfolio/images/projects/escape-protocol.jpg",
			video: "/Portfolio/videos/escape-protocol.mp4",
			link: getArticleLink("escape-protocol"),
			type: "Game",
			role: "Gameplay programmer",
			tools: ["Unreal Engine 5", "Blueprints", "MetaSounds"],
			overview: [
				"You walk around a spaceship and complete small tasks and puzzles to escape. The map layout follows the Among Us ship, because its flow is easy to read.",
			],
			contributions: [
				"The task system and the individual tasks and puzzles.",
				"A HUD element that shows the direction and distance to the next task.",
				"Sound effects (royalty-free) hooked up through MetaSounds.",
				"The level layout.",
			],
			process: [
				"Each task is its own Blueprint built on the same structure, so they can be added or changed without touching the others.",
			],
		},
		{
			slug: "hide-as-prop",
						title: "Hide as Prop",
			description:
				"A prop-hunt style prototype. You turn into objects around you to hide, and drop decoy copies of yourself to fool the enemy.",
			tech: "Unreal Engine 5 • Blueprints",
			engine: "UE5",
			image: "/Portfolio/images/projects/hide-as-prop.jpg",
			video: "/Portfolio/videos/hide-as-prop.mp4",
			link: getArticleLink("hide-as-prop"),
			type: "Prototype",
			role: "Gameplay programmer, level designer",
			tools: ["Unreal Engine 5", "Blueprints"],
			overview: [
				"A prototype of a stealth idea where the player can copy the shape of nearby objects to blend in and spawn decoys of themselves.",
			],
			contributions: [
				"Transforming into a nearby object by swapping the player's mesh and collision.",
				"Spawning decoy copies of the player.",
				"A basic enemy that reacts to both the player and the decoys.",
			],
			process: [
				"The player looks for objects within range, then copies the target's mesh and collision onto itself. Decoys use the same setup, so the enemy's detection treats them like the real player.",
			],
		},
		{
			slug: "endless-cube-runner",
						title: "Endless Cube Runner",
			description:
				"Endless runner on procedurally spawned platforms, with moving obstacles and swinging hammers.",
			tech: "Unreal Engine 5 • Blueprints",
			engine: "UE5",
			image: "/Portfolio/images/projects/endless-cube-runner.jpg",
			video: "/Portfolio/videos/endless-cube-runner.mp4",
			link: getArticleLink("endless-cube-runner"),
			type: "Game",
			role: "Gameplay programmer, level designer",
			tools: ["Unreal Engine 5", "Blueprints"],
			overview: [
				"You steer a cube along a track that keeps generating in front of you, dodging obstacles that move across it.",
			],
			contributions: [
				"Platform generator that spawns new track sections and obstacles as you go.",
				"Moving obstacles and swinging hammers.",
			],
			process: [
				"Track sections and obstacles spawn ahead of the player in real time. The hammers swing on a calculated rotation arc, with timing set to match the difficulty curve.",
			],
		},
		{
			slug: "tap-to-boom",
						title: "Tap to Boom",
			description:
				"A 2D arcade game in Unity. Bombs fall and you tap them before they land, and three misses end the game.",
			tech: "Unity • C#",
			engine: "Unity",
			image: "/Portfolio/images/projects/tap-to-boom.jpg",
			video: "/Portfolio/videos/tap-to-boom.mp4",
			link: getArticleLink("tap-to-boom"),
			type: "Game",
			role: "Gameplay programmer",
			tools: ["Unity", "C#"],
			overview: [
				"A short 2D game. Bombs drop from the top of the screen and you tap them before they hit the ground. Every bomb that lands costs one of your three hearts.",
			],
			contributions: [
				"Bomb spawning at random positions and falling movement.",
				"Tap input that destroys the bomb under your finger.",
				"Hearts, game over, and the overall game loop.",
			],
			process: [
				"Taps are checked with a raycast against the bombs' colliders. Most of the tuning was spawn rate and fall speed, plus some small effects and sounds so that hitting a bomb feels satisfying.",
			],
		},
	],

	articles: {
		title: "Project write-ups",
		description: "Longer notes on projects I've worked on.",
	},
};

export default INFO;
