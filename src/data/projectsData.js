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
    title: "Puzzle Game - Brain Teaser",
    category: "Game Dev",
    role: "Game Designer & Programmer",
    description: "Strategic puzzle game requiring critical thinking and pattern recognition. Features multiple difficulty modes and endless replay value.",
    challenges: "Designing puzzles that are challenging yet solvable without frustrating players.",
    solution: "Created level progression system with hint system and difficulty scaling based on player performance.",
    usedTools: ["Unreal Engine 5", "C++", "Blueprints"],
    linkToProject: "https://github.com/yourusername/puzzle-game",
    hasLink: true
  },
  {
    id: 2,
    imageUrls: [escapeProtocalGif],  // Use imported image
    title: "GoBo - Puzzle Adventure",
    category: "Game Dev",
    role: "Gameplay Programmer",
    description: "A creative puzzle game with innovative mechanics and beautiful art style. Features progressive difficulty and engaging level design.",
    challenges: "Creating intuitive puzzle mechanics that scale in difficulty without feeling overwhelming.",
    solution: "Implemented dynamic difficulty adjustment and comprehensive tutorial system for player onboarding.",
    usedTools: ["Unreal Engine 5", "Blueprints", "Level Design Tools"],
    linkToProject: "https://github.com/yourusername/gobo",
    hasLink: true
  },
  {
    id: 3,
    imageUrls: [cubeRunnerGif],  // Use imported image
    title: "Dragon Island - 3D Adventure Game",
    category: "Game Dev",
    role: "Gameplay Programmer & Level Designer",
    description: "An immersive 3D adventure game featuring dynamic AI creatures, environmental puzzles, and engaging combat mechanics built in Unreal Engine 5.",
    challenges: "Maintaining 60 FPS with complex AI and large open world while keeping visual quality high.",
    solution: "Implemented spatial hashing for efficient NPC queries and used Unreal's level streaming and profiling tools for optimization.",
    usedTools: ["Unreal Engine 5", "C++", "Blueprints", "AI Perception"],
    linkToProject: "https://github.com/yourusername/dragon-island",
    hasLink: true
  },
  {
    id: 4,
    imageUrls: [tapGameGif],  // Use imported image
    title: "Dragon Island - 3D Adventure Game",
    category: "Game Dev",
    role: "Gameplay Programmer & Level Designer",
    description: "An immersive 3D adventure game featuring dynamic AI creatures, environmental puzzles, and engaging combat mechanics built in Unreal Engine 5.",
    challenges: "Maintaining 60 FPS with complex AI and large open world while keeping visual quality high.",
    solution: "Implemented spatial hashing for efficient NPC queries and used Unreal's level streaming and profiling tools for optimization.",
    usedTools: ["Unreal Engine 5", "C++", "Blueprints", "AI Perception"],
    linkToProject: "https://github.com/yourusername/dragon-island",
    hasLink: true
  },
  {
    id: 5,
    imageUrls: [propAndHuntGif],  // Use imported image
    title: "Dragon Island - 3D Adventure Game",
    category: "Game Dev",
    role: "Gameplay Programmer & Level Designer",
    description: "An immersive 3D adventure game featuring dynamic AI creatures, environmental puzzles, and engaging combat mechanics built in Unreal Engine 5.",
    challenges: "Maintaining 60 FPS with complex AI and large open world while keeping visual quality high.",
    solution: "Implemented spatial hashing for efficient NPC queries and used Unreal's level streaming and profiling tools for optimization.",
    usedTools: ["Unreal Engine 5", "C++", "Blueprints", "AI Perception"],
    linkToProject: "https://github.com/yourusername/dragon-island",
    hasLink: true
  },
  {
    id: 6,
    imageUrls: [dragonIslandGif],  // Use imported image
    title: "Dragon Island - 3D Adventure Game",
    category: "Game Dev",
    role: "Gameplay Programmer & Level Designer",
    description: "An immersive 3D adventure game featuring dynamic AI creatures, environmental puzzles, and engaging combat mechanics built in Unreal Engine 5.",
    challenges: "Maintaining 60 FPS with complex AI and large open world while keeping visual quality high.",
    solution: "Implemented spatial hashing for efficient NPC queries and used Unreal's level streaming and profiling tools for optimization.",
    usedTools: ["Unreal Engine 5", "C++", "Blueprints", "AI Perception"],
    linkToProject: "https://github.com/yourusername/dragon-island",
    hasLink: true
  },
  {
    id: 7,
    imageUrls: [hideAndEscapeGif],  // Use imported image
    title: "Dragon Island - 3D Adventure Game",
    category: "Game Dev",
    role: "Gameplay Programmer & Level Designer",
    description: "An immersive 3D adventure game featuring dynamic AI creatures, environmental puzzles, and engaging combat mechanics built in Unreal Engine 5.",
    challenges: "Maintaining 60 FPS with complex AI and large open world while keeping visual quality high.",
    solution: "Implemented spatial hashing for efficient NPC queries and used Unreal's level streaming and profiling tools for optimization.",
    usedTools: ["Unreal Engine 5", "C++", "Blueprints", "AI Perception"],
    linkToProject: "https://github.com/yourusername/dragon-island",
    hasLink: true
  },

  //3d project from here
  {
    id: 8,
    imageUrls: [iphoneGif],  // Use imported image
    title: "3D Product Showcase",
    category: "3D Art",
    role: "3D Artist",
    description: "High-quality 3D model and visualization with photorealistic materials and professional rendering.",
    challenges: "Achieving photorealistic quality while maintaining optimal performance.",
    solution: "Used advanced material systems and optimized geometry for real-time rendering.",
    usedTools: ["Blender", "Substance Painter", "Cinema 4D"],
    linkToProject: "https://sketchfab.com/models/your-model",
    hasLink: true
  },
  {
    id: 9,
    imageUrls: [carGif],  // Use imported image
    title: "3D Product Showcase",
    category: "3D Art",
    role: "3D Artist",
    description: "High-quality 3D model and visualization with photorealistic materials and professional rendering.",
    challenges: "Achieving photorealistic quality while maintaining optimal performance.",
    solution: "Used advanced material systems and optimized geometry for real-time rendering.",
    usedTools: ["Blender", "Substance Painter", "Cinema 4D"],
    linkToProject: "https://sketchfab.com/models/your-model",
    hasLink: true
  },
  {
    id: 10,
    imageUrls: [headphoneImg],  // Use imported image
    title: "3D Product Showcase",
    category: "3D Art",
    role: "3D Artist",
    description: "High-quality 3D model and visualization with photorealistic materials and professional rendering.",
    challenges: "Achieving photorealistic quality while maintaining optimal performance.",
    solution: "Used advanced material systems and optimized geometry for real-time rendering.",
    usedTools: ["Blender", "Substance Painter", "Cinema 4D"],
    linkToProject: "https://sketchfab.com/models/your-model",
    hasLink: true
  },
  {
    id: 11,
    imageUrls: [micImg],  // Use imported image
    title: "3D Product Showcase",
    category: "3D Art",
    role: "3D Artist",
    description: "High-quality 3D model and visualization with photorealistic materials and professional rendering.",
    challenges: "Achieving photorealistic quality while maintaining optimal performance.",
    solution: "Used advanced material systems and optimized geometry for real-time rendering.",
    usedTools: ["Blender", "Substance Painter", "Cinema 4D"],
    linkToProject: "https://sketchfab.com/models/your-model",
    hasLink: true
  },
  {
    id: 12,
    imageUrls: [robotImg],  // Use imported image
    title: "3D Product Showcase",
    category: "3D Art",
    role: "3D Artist",
    description: "High-quality 3D model and visualization with photorealistic materials and professional rendering.",
    challenges: "Achieving photorealistic quality while maintaining optimal performance.",
    solution: "Used advanced material systems and optimized geometry for real-time rendering.",
    usedTools: ["Blender", "Substance Painter", "Cinema 4D"],
    linkToProject: "https://sketchfab.com/models/your-model",
    hasLink: true
  },
];