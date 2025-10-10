import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import iphoneGif from "../assets/gifs/iphone.gif"
import carGif from "../assets/gifs/car.gif"
import micImg from "../assets/img/Mic.png"
import robotImg from "../assets/img/Robot.png"
import headphoneImg from "../assets/img/headphone.png"
import colorSharp2 from "../assets/img/color-sharp2.png";

import puzzleGameGif from "../assets/gifs/PuzzleGamePromo.gif"
import cubeRunnerGif from "../assets/gifs/GoBoPromo.gif"
import escapeProtocalGif from "../assets/gifs/SpaceGamePromo.gif"
import tapGameGif from "../assets/gifs/TapGamePromo.gif"
import hideAndEscapeGif from "../assets/gifs/lobbyPromo.gif"
import dragonIslandGif from "../assets/gifs/DragonIslandPromo.gif"
import propAndHuntGif from "../assets/gifs/PropAndHuntPromo.gif"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const gameProjects = [
    {
      title: "Momentum Cube",
      description: "A 3D physics puzzle game where players roll and push a cube to solve platforming challenges",
      imgUrl: puzzleGameGif,
      url: "#"
    },
    {
      title: "Escape Protocol",
      description: "You're alone in a drifting spaceship. Complete repair tasks and survive the unknown",
      imgUrl: escapeProtocalGif,
      url: "#"
    },
    {
      title: "Endless Cube Runner",
      description: "Control a speeding cube in a never-ending 3D track filled with obstacles and increasing speed",
      imgUrl:cubeRunnerGif,
      url: "#"
    },
    {
      title: "Tap to Boom – Bomb Defusal Game",
      description: "Arcade tapper game where bombs fall from the sky and quick reflexes are key to survival",
      imgUrl: tapGameGif,
      url: "#"
    },
    {
      title: "Hide as Prop (Prototype)",
      description: "Prototype of a mechanic where players hide in plain sight by morphing into surrounding objects",
      imgUrl: propAndHuntGif,
      url: "#"
    },
    {
      title: "Dragon Scout – AI Behavior Showcase (Prototype)",
      description: "Mechanics test focusing on an enemy AI that reacts to player movement and patterns",
      imgUrl: dragonIslandGif,
      url: "#"
    },
    {
      title: "Choose Your Side (Prototype)",
      description: "A simple team selection screen prototype developed for a cancelled multiplayer game",
      imgUrl: hideAndEscapeGif,
      url: "#"
    },
    
  ];

  const animationProjects = [
    {
      title: "Smartphone Product Showcase",
      description: "Sleek 3D product animation of a high-end smartphone",
      imgUrl: iphoneGif,
      url: "#"
    },
    {
      title: "Mustang Cinematic Render",
      description: "Stylized 3D cinematic shot of a Mustang muscle car",
      imgUrl: carGif,
      url: "#"
    },
    {
      title: "Headphone Product Visualization",
      description: "High-detail headphone render showcasing product design and materials",
      imgUrl: headphoneImg,
      url: "#"
    },
    {
      title: "Color Mic – Stylized Product Render",
      description: "Vibrant product render of a microphone in color-focused setup",
      imgUrl: micImg,
      url: "#"
    },
    {
      title: "Lonely Robot – Concept Render",
      description: "Concept render of a solitary robot, emphasizing atmosphere and narrative",
      imgUrl: robotImg,
      url: "#"
    },
    
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my diverse portfolio spanning game development, 3D animations, and creative projects. Each piece represents a unique challenge and innovative solution.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Game Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">3D Animation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">About My Work</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          gameProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          animationProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third" style={{width: "100%", maxWidth: "100%"}}>
  <div className="about-work-content" style={{maxWidth: "100%", width: "100%"}}>
    <h3 style={{marginBottom: "2rem", textAlign: "center", fontSize: "2.5rem"}}>My Approach to Gameplay Programming, 3D Modeling & Product Animation</h3>

    <div className="work-section" style={{marginBottom: "2rem"}}>
      <h4 style={{color: "#AA367C", marginBottom: "1rem", fontSize: "1.8rem"}}>Gameplay Programming</h4>
      <p style={{
        fontSize: "1.1rem", 
        lineHeight: "1.8", 
        marginBottom: "1.5rem", 
        textAlign: "justify",
        textJustify: "inter-word",
        width: "100%",
        hyphens: "auto",
        wordSpacing: "0.1em"
      }}>
        As a solo developer, I often find myself brimming with ideas, but sometimes the scope can feel overwhelming. Large-scale concepts are exciting, but when you're working on a project alone, they need to be both feasible and manageable. That's why I prioritize ideas that stand out—concepts that feel fresh and exciting, but are also scalable and development-friendly.
      </p>
      <p style={{
        fontSize: "1.1rem", 
        lineHeight: "1.8", 
        marginBottom: "1.5rem", 
        textAlign: "justify",
        textJustify: "inter-word",
        width: "100%",
        hyphens: "auto",
        wordSpacing: "0.1em"
      }}>
        When creating gameplay mechanics, I always try to think through every interaction between the mechanics. It’s crucial for me to understand how each component will interact and function together, keeping scalability in mind. My process usually begins by blocking out the gameplay with basic elements, often relying on a lot of print statements for debugging. This helps me keep track of how things are working or where something might be going wrong. It’s not always perfect, but this trial-and-error approach is part of the journey.
      </p>
      <p style={{
        fontSize: "1.1rem", 
        lineHeight: "1.8", 
        marginBottom: "1.5rem", 
        textAlign: "justify",
        textJustify: "inter-word",
        width: "100%",
        hyphens: "auto",
        wordSpacing: "0.1em"
      }}>
        When I encounter an error, I try to backtrack through the logs and understand where the issue might stem from. It’s a learning process, and even if I face roadblocks that halt the progression of a project, I’m always motivated by the satisfaction of seeing something come together—whether it's a working mechanic or a polished feature.
      </p>
      <p style={{
        fontSize: "1.1rem", 
        lineHeight: "1.8", 
        marginBottom: "1.5rem", 
        textAlign: "justify",
        textJustify: "inter-word",
        width: "100%",
        hyphens: "auto",
        wordSpacing: "0.1em"
      }}>
        Some of my projects, while simple, have been the most rewarding to complete. The feeling of seeing a gameplay mechanic function as intended, even if it’s just a small victory, is unmatched.
      </p>
    </div>

    <div className="work-section" style={{marginBottom: "2rem"}}>
      <h4 style={{color: "#4A2FBD", marginBottom: "1rem", fontSize: "1.8rem"}}>3D Modeling & Product Animation</h4>
      <p style={{
        fontSize: "1.1rem", 
        lineHeight: "1.8", 
        marginBottom: "1.5rem", 
        textAlign: "justify",
        textJustify: "inter-word",
        width: "100%",
        hyphens: "auto",
        wordSpacing: "0.1em"
      }}>
        In the world of 3D modeling and product animation, I tend to lean into my strengths: creating highly detailed models. Whether it's a phone, a car, or a set of headphones, I take pride in crafting the finest details, from textures to the overall form. However, when it comes to animation, I know I'm still growing. While I can create realistic models, I’m still refining my animation skills.
      </p>
      <p style={{
        fontSize: "1.1rem", 
        lineHeight: "1.8", 
        marginBottom: "1.5rem", 
        textAlign: "justify",
        textJustify: "inter-word",
        width: "100%",
        hyphens: "auto",
        wordSpacing: "0.1em"
      }}>
        I prefer to focus on basic, yet effective camera shots to highlight the product. Since I’m not a pro animator, I choose simplicity over complexity when it comes to movement and staging, allowing the camera work and lighting to speak for themselves. This approach has allowed me to create animations that still convey the key aspects of a product while focusing on what I can control—like clean renders, simple movements, and sharp visual storytelling.
      </p>
    </div>

    <div className="work-section">
      <h4 style={{color: "#AA367C", marginBottom: "1rem", fontSize: "1.8rem"}}>Reflection on My Projects</h4>
      <p style={{
        fontSize: "1.1rem", 
        lineHeight: "1.8", 
        marginBottom: "1.5rem", 
        textAlign: "justify",
        textJustify: "inter-word",
        width: "100%",
        hyphens: "auto",
        wordSpacing: "0.1em"
      }}>
        The projects in my portfolio, whether they’re gameplay experiments or 3D product animations, all represent a blend of my ideas, my growth, and my limitations. While some mechanics didn’t fully evolve or some animations weren’t as smooth as I’d like, the satisfaction I get from finishing a project is immense. It’s about the process—the learning, the debugging, the problem-solving.
      </p>
      <p style={{
        fontSize: "1.1rem", 
        lineHeight: "1.8",
        textAlign: "justify",
        textJustify: "inter-word",
        width: "100%",
        hyphens: "auto",
        wordSpacing: "0.1em"
      }}>
        I’ve learned that perfection isn’t always the goal. It’s about taking small steps toward realizing my vision, whether that’s iterating on a gameplay mechanic, refining a 3D model, or capturing the essence of a product through animation. Even if a project doesn’t reach its original ambitious goal, the progress made in that journey has been incredibly valuable.
      </p>
    </div>
  </div>
</Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}