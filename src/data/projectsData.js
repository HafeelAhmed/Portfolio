// src/data/projectsData.js


import iphoneGif from "../assets/gifs/iphone.gif"
import carGif from "../assets/gifs/car.gif"
import micImg from "../assets/img/Mic.png"
import robotImg from "../assets/img/Robot.png"
import headphoneImg from "../assets/img/headphone.png"

import puzzleGameGif from "../assets/gifs/PuzzleGamePromo.gif"
import cubeRunnerGif from "../assets/gifs/GoBoPromo.gif"
import escapeProtocalGif from "../assets/gifs/SpaceGamePromo.gif"
import tapGameGif from "../assets/gifs/TapGamePromo.gif"
import hideAndEscapeGif from "../assets/gifs/lobbyPromo.gif"
import dragonIslandGif from "../assets/gifs/DragonIslandPromo.gif"
import propAndHuntGif from "../assets/gifs/PropAndHuntPromo.gif"

export const projectsData = [
  {
    id: 1,
    imageUrls: [puzzleGameGif],  // Use imported image
    title: "Momentum Cube - Brain Teaser",
    category: "Game Dev",
    role: "Gameplay Programmer",
    description: "Strategic puzzle game requiring critical thinking and pattern recognition. Features multiple difficulty modes and endless replay value.",
    Contributions: "Built the core gameplay mechanics including moving platforms, lasers, death systems, and destroyable actors. Designed a scalable mechanics architecture using a base Blueprint class so every mechanic inherits clean, reusable logic. Implemented visual and gameplay polish such as dissolve effects, collision interactions, and responsive puzzle feedback.",
    Process: "Started by creating a generic mechanics Blueprint class and used it as the foundation for every gameplay element to keep the system modular and scalable. Developed the moving platform using pure logic and math, handling movement paths, timing, and player interaction through Blueprint scripting. Implemented the laser by casting a ray from the origin, spawning the laser mesh, and destroying the player or destroyable actors on hit with a smooth dissolve animation. Focused on building a strong architecture so adding new mechanics or designing new levels becomes fast, clean, and highly scalable.",
    usedTools: ["Unreal Engine 5", "C++", "Blueprints"],
    linkToProject: "#",
    hasLink: false
  },
  {
    id: 2,
    imageUrls: [escapeProtocalGif],  // Use imported image
    title: "Escape Protocol",
    category: "Game Dev",
    role: "Gameplay Programmer",
    description: "A casual escape-style game inspired by titles like Among Us, where players complete tasks around a spaceship to break free. Combines light puzzle-solving, spatial awareness, and immersive audio to create a fun, tension-filled experience.",
    Contributions: "Created the UI that displays task distance and direction for better player guidance. Built multiple tasks and puzzles using Blueprint logic and clean modular structure. Integrated royalty-free sound effects using MetaSound for responsive in-game audio. Designed the level layout inspired by the Among Us map to deliver clear navigation and playful exploration.",
    Process: "Started by planning the task system and building each task with Blueprint logic to keep everything modular and easy to update. Designed puzzle interactions using the same logic-driven approach for consistency and quick iteration. Developed the task-direction UI to help players navigate the ship and understand objectives at a glance. Sourced royalty-free sound effects and integrated them through MetaSound to sync audio feedback with gameplay actions. Structured the level layout based on the flow and readability of the Among Us map to keep movement intuitive and engaging.",
    usedTools: ["Unreal Engine 5", "Blueprints", "MetaSound"],
    linkToProject: "#",
    hasLink: false
  },
  {
    id: 3,
    imageUrls: [cubeRunnerGif],  // Use imported image
    title: "Endless Cube Runner",
    category: "Game Dev",
    role: "Gameplay Programmer & Level Designer",
    description: "A fast-paced endless runner where you guide a cube across procedurally generated platforms while dodging obstacles. Focuses on quick reflexes, clean movement, and dynamic hazard patterns to keep each run fresh.",
    Contributions: "Developed procedural obstacle systems that generate moving hazards across the platform. Created swinging hammer obstacles with Blueprint logic and math-driven motion. Built the gameplay flow around responsive movement and repeating platform segments to support endless progression.",
    Process: "Started by building a procedural platform generator to spawn sections and obstacles in real time. Designed the moving obstacle logic using math-based motion curves and Blueprint scripting for smooth, predictable patterns. Created the swinging hammer system by calculating rotation arcs and timing to match the difficulty curve. Focused on keeping all systems modular and efficient so the game can scale with more obstacle types and faster speeds.",
    usedTools: ["Unreal Engine 5", "Blueprints"],
    linkToProject: "#",
    hasLink: false
  },
  {
    id: 4,
    imageUrls: [propAndHuntGif],  // Use imported image
    title: "Hide as Prop (Prototype)",
    category: "Game Dev",
    role: "Gameplay Programmer & Level Designer",
    description: "A prototype game where players can transform into objects in the environment to hide from enemies. Features object mimicry and self-duplication mechanics to create strategic stealth gameplay.",
    Contributions: "Implemented the core transformation mechanic allowing the player to mimic objects in the scene. Built a duplication system to create decoys that confuse enemies. Designed basic enemy detection logic to interact with player transformations. Demonstrated the prototype’s core stealth concept with fully functional proof-of-concept mechanics.",
    Process: "Started by creating a system to detect nearby objects and swap the player’s mesh and collision to match them using Blueprint logic. Developed a duplication mechanic that spawns decoy copies of the player to distract enemies. Set up a simple enemy detection system to respond to both the player and decoys. Focused on making the prototype flexible so additional objects or enemy types could easily be added later.",
    usedTools: ["Unreal Engine 5", "Blueprints"],
    linkToProject: "#",
    hasLink: false
  },
  {
    id: 5,
    imageUrls: [tapGameGif],  // Use imported image
    title: "Tap to Boom – Bomb Defusal Game",
    category: "Game Dev",
    role: "Gameplay Programmer & Level Designer",
    description: "Tap to Boom is a simple and fast 2D Unity game where bombs fall from the sky and you have to tap them before they hit the ground. Miss too many and you lose one of your three hearts—classic arcade chaos.",
    Contributions: "Implemented the bomb-spawning and falling system. Built tap-to-destroy input logic. Added a heart-based life system that reacts when bombs hit the ground. Created basic game flow and overall gameplay feel.",
    Process: "Used Unity’s 2D tools to spawn bombs at random positions and apply downward movement. Set up tap detection using raycasts and simple collision checks to destroy bombs on touch. Added a heart counter that decreases when bombs reach the ground. Polished timing, spawn rate, and simple VFX/SFX to make gameplay feel punchy and responsive.",
    usedTools: ["Unity", "C#", "Unity 2D Tools"],
    linkToProject: "#",
    hasLink: false
  },
  {
    id: 6,
    imageUrls: [dragonIslandGif],  // Use imported image
    title: "Dragon Scout – AI Behavior Showcase (Prototype)",
    category: "Game Dev",
    role: "Gameplay Programmer & Level Designer",
    description: "Dragon Scout is an AI-focused prototype where an elf- or human-like enemy uses smart perception to scout the area, chase the player, and perform attacks. The goal is to showcase clean, readable AI behavior driven by UE5’s perception and behavior systems.",
    Contributions: "Designed and implemented the full AI behavior system for the humanoid enemy. Set up AI Perception so the enemy can detect and track the player. Built scouting, chasing, and attacking states using Behavior Trees. Polished movement and response logic to create a believable AI showcase.",
    Process: "Configured AI Perception to detect the player using sight and control state changes. Built a Behavior Tree that smoothly transitions the enemy through scout → chase → attack behaviors. Used Blackboard keys to manage data like player location and detection status. Created custom tasks for movement, rotation, and attack triggers. Iterated on perception ranges, behavior flow, and cooldowns to make the AI feel natural and reactive.",
    usedTools: ["Unreal Engine 5", "Blueprints", "AI Perception", "Behavior Trees", "Blackboard"],
    linkToProject: "#",
    hasLink: false
  },
  {
    id: 7,
    imageUrls: [hideAndEscapeGif],  // Use imported image
    title: "Choose Your Side (Prototype)",
    category: "Game Dev",
    role: "Gameplay Programmer & Level Designer",
    description: "Choose Your Side is a UE5 multiplayer prototype that demonstrates joining a lobby, selecting a team, and entering the match as either Red or Blue. It’s a clean showcase of basic session flow and team assignment in a networked setup.",
    Contributions: "Built the multiplayer lobby system for joining and hosting sessions. Implemented team selection logic for choosing Red or Blue before starting the match. Synced player team data across the network so all clients see correct team assignments. Set up a simple transition from lobby to gameplay with replicated player states.",
    Process: "Used UE5’s Online Subsystem to create and join multiplayer sessions. Built a lobby UI that handles player readiness and team choice. Implemented replicated variables to store and broadcast each player’s team color. Set up GameMode, PlayerState, and GameState logic to manage team assignments. Created a clean flow from lobby → team selection → match start to demonstrate the core multiplayer pipeline.",
    usedTools: ["Unreal Engine 5", "Blueprints", "Online Subsystem", "Multiplayer Replication"],
    linkToProject: "#",
    hasLink: false
  },

  //3d project from here
  {
    id: 8,
    imageUrls: [iphoneGif],  // Use imported image
    title: "Smartphone Product Showcase",
    category: "3D Art",
    role: "3D Artist",
    description: "Smartphone Product Showcase is a clean Blender animation featuring an iPhone-style device. The project highlights modeling, texturing, lighting, and smooth cinematic animation all created from scratch.",
    Contributions: "Modeled the smartphone from the ground up using Blender. Created all textures and materials for a polished product look. Set up lighting and camera shots for a cinematic feel. Animated the phone to highlight its design and features. Handled rendering and final presentation entirely in Blender.",
    Process: "Started by blocking out the phone’s shape and refining details like buttons, bezels, and camera modules. Built PBR materials and custom textures to match a premium smartphone aesthetic. Set up lighting with HDRIs and key lights to emphasize reflections and silhouette. Animated camera movements and object rotations for a smooth product-style reveal. Rendered the final sequence using Cycles and tweaked settings for a clean, high-quality result.",
    usedTools: ["Blender", "Cycles Renderer", "PBR Materials"],
    linkToProject: "#",
    hasLink: false
  },
  {
    id: 9,
    imageUrls: [carGif],  // Use imported image
    title: "Mustang Cinematic Render",
    category: "3D Art",
    role: "3D Artist",
    description: "Mustang Cinematic Render is a short Blender animation showcasing a dramatic camera move that sweeps from the side of the car to the front. The focus is on clean lighting, smooth motion, and a polished cinematic presentation.",
    Contributions: "Set up the full lighting and scene composition for the render. Animated a smooth side-to-front camera move to highlight the car’s shape. Created materials, reflections, and environment elements for a cinematic look. Handled rendering and final visual polish entirely in Blender.",
    Process: "Composed the scene with controlled lighting to emphasize the Mustang’s curves and reflections. Built PBR materials and tuned shaders for a realistic, glossy finish. Animated the camera with curve paths and subtle motion smoothing for a cinematic sweep. Used Cycles for rendering and optimized samples, denoising, and color grading to achieve a clean final render.",
    usedTools: ["Blender", "Cycles Renderer", "PBR Materials", "Camera Animation"],
    linkToProject: "#",
    hasLink: false
  },
  {
    id: 10,
    imageUrls: [headphoneImg],  // Use imported image
    title: "Headphone Product Visualization",
    category: "3D Art",
    role: "3D Artist",
    description: "Headphone Product Visualization is a clean Blender render showcasing a premium-style pair of headphones. The focus is on realistic lighting, polished materials, and a professional product-shot composition.",
    Contributions: "Created all lighting and scene composition from scratch. Built materials and shaders to give the headphones a high-quality, realistic look. Set up camera framing for a professional product-style render. Handled all rendering and visual polish in Blender.",
    Process: "Designed a lighting setup using controlled key lights and soft reflections to highlight the headphone’s form. Created PBR materials and tuned shader properties for metal, plastic, and fabric surfaces. Composed the shot with careful camera positioning to achieve a clean product aesthetic. Rendered with Cycles and refined denoising, color balance, and final adjustments for a crisp result.",
    usedTools: ["Blender", "Cycles Renderer", "PBR Materials", "Lighting Setup"],
    linkToProject: "#",
    hasLink: false
  },
  {
    id: 11,
    imageUrls: [micImg],  // Use imported image
    title: "Color Mic – Stylized Product Render",
    category: "3D Art",
    role: "3D Artist",
    description: "Color Mic – Stylized Product Render is a bold Blender shot featuring a custom-modeled microphone lit with two contrasting colors. The goal was to create a clean, stylish render with strong visual mood and simple product appeal.",
    Contributions: "Modeled the microphone from scratch for a clean stylized look. Set up a dual-color lighting setup to create contrast and mood. Composed the scene and camera framing for a strong product-shot aesthetic. Rendered and polished the final image entirely in Blender.",
    Process: "Modeled the mic using simple, clean geometry suited for a stylized product feel. Designed a two-tone lighting setup using opposite color temperatures to create depth and visual pop. Positioned the camera to capture the mic’s silhouette and shading balance. Rendered using Cycles and fine-tuned materials, light intensity, and color grading for a polished final image.",
    usedTools: ["Blender", "Cycles Renderer", "PBR Materials", "Lighting Setup"],
    linkToProject: "#",
    hasLink: false
  },
  {
    id: 12,
    imageUrls: [robotImg],  // Use imported image
    title: "Lonely Robot – Concept Render",
    category: "3D Art",
    role: "3D Artist",
    description: "Lonely Robot – Concept Render is a Blender image featuring a robot inspired by Eve from Wall-E, standing alone under moody blue lighting. The render emphasizes atmosphere, emotion, and clean visual storytelling.",
    Contributions: "Modeled the robot from scratch with smooth, futuristic shapes. Created materials and shaders to match a sleek, reflective surface. Set up a blue-toned lighting scheme to convey loneliness and mood. Composed the camera and scene for a centered, cinematic feel. Rendered and polished the final image entirely in Blender.",
    Process: "Designed and modeled the robot with smooth curves and clean geometry. Built PBR materials with reflections and subtle highlights. Positioned blue lights to create a moody, atmospheric effect and emphasize the robot’s form. Framed the camera for a centered, impactful composition. Rendered with Cycles, adjusting denoising, exposure, and color grading for a polished concept render.",
    usedTools: ["Blender", "Cycles Renderer", "PBR Materials", "Lighting Setup"],
    linkToProject: "#",
    hasLink: false
  },
];