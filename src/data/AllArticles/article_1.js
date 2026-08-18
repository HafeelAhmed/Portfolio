import React from "react";

export function article_1() {
	return {
		slug: "ares2192",

		date: "7 May 2023",

		title: "Project 1: Showcase & Overview",

		description:
			"A futuristic sci-fi racing experience built in Unreal Engine 5, featuring a space station hub, high-speed racing on Mars, AI-driven vehicles, NPC systems, and improved player navigation.",

		keywords: [
			"Unreal Engine 5",
			"C++",
			"Blueprints",
			"AI",
			"Game Development",
			"Racing Game",
			"Portfolio Project",
		],

		body: (
			<div className="article-content">

				{/* HERO INTRO */}

				<div className="article-intro">
					<p className="article-lead">
						A futuristic sci-fi racing experience where players
						live inside a space station hub and compete in
						high-speed races across a terraformed Mars
						environment.
					</p>

					<div className="project-tech-stack">
						<span className="tech-badge">Unreal Engine 5</span>
						<span className="tech-badge">C++</span>
						<span className="tech-badge">Blueprints</span>
						<span className="tech-badge">AI</span>
					</div>
				</div>


				{/* HERO IMAGE */}

				<figure className="article-figure article-figure-large">
					<img
						src="/Portfolio/images/Ares/AresThumbnail.jpg"
						alt="Ares 2192 gameplay"
					/>

					<figcaption>
						A glimpse of the futuristic racing environment.
					</figcaption>
				</figure>


				{/* OVERVIEW */}

				<section className="article-section">

					<div className="section-label">
						01 — Overview
					</div>

					<h2>Building a futuristic racing experience</h2>

					<p>
						The project combines a futuristic space station
						hub with high-speed racing environments located
						on Mars.
					</p>

					<p>
						The demo focuses on vehicle handling, AI-driven
						traffic, NPC behavior, and seamless navigation
						between the station and racing environments.
					</p>

				</section>


				{/* PROJECT INFO */}

				<div className="project-info-grid">

					<div className="project-info-card">
						<span>Engine</span>
						<strong>Unreal Engine 5</strong>
					</div>

					<div className="project-info-card">
						<span>Role</span>
						<strong>Gameplay Programmer</strong>
					</div>

					<div className="project-info-card">
						<span>Focus</span>
						<strong>AI & Navigation</strong>
					</div>

					<div className="project-info-card">
						<span>IP</span>
						<strong>Tenderizer Games</strong>
					</div>

				</div>


				{/* CONTRIBUTIONS */}

				<section className="article-section">

					<div className="section-label">
						02 — Contributions
					</div>

					<h2>What I worked on</h2>

					<p>
						My work focused primarily on gameplay systems,
						AI behavior, navigation, and improving the
						player's ability to understand and move through
						the world.
					</p>

					<div className="feature-list">

						<div className="feature-item">
							<span className="feature-number">01</span>

							<div>
								<h3>Buddy AI</h3>

								<p>
									Developed the Buddy AI companion
									system, currently focused on
									cosmetic behavior with future
									interaction systems planned.
								</p>
							</div>
						</div>


						<div className="feature-item">
							<span className="feature-number">02</span>

							<div>
								<h3>Vehicle AI</h3>

								<p>
									Implemented AI behavior for
									vehicles, focusing on movement,
									responsiveness, and believable
									behavior.
								</p>
							</div>
						</div>


						<div className="feature-item">
							<span className="feature-number">03</span>

							<div>
								<h3>Navigation</h3>

								<p>
									Worked on car navigation systems
									to provide reliable pathfinding
									across complex environments.
								</p>
							</div>
						</div>


						<div className="feature-item">
							<span className="feature-number">04</span>

							<div>
								<h3>NPC Systems</h3>

								<p>
									Contributed to NPC behavior systems
									to improve immersion throughout
									the space station.
								</p>
							</div>
						</div>

					</div>

				</section>


				{/* VEHICLE AI */}

				<section className="article-section">

					<div className="section-label">
						03 — Vehicle AI
					</div>

					<h2>Making the vehicles feel alive</h2>

					<p>
						One of my responsibilities was working on the
						behavior of AI-controlled vehicles. The goal was
						to make their movement feel responsive while
						remaining predictable enough for the player.
					</p>

				</section>


				<figure className="article-figure">
					<img
						src="/Portfolio/images/Ares/aresGameplay1.jpg"
						alt="Vehicle AI system"
					/>

					<figcaption>
						AI-controlled vehicles navigating the environment.
					</figcaption>
				</figure>


				{/* NAVIGATION */}

				<section className="article-section">

					<div className="section-label">
						04 — Navigation
					</div>

					<h2>Improving player navigation</h2>

					<p>
						When I joined the project, navigation inside the
						space station was one of the main pain points.
						Players could easily become disoriented and
						struggle to understand where they needed to go.
					</p>

					<p>
						I analyzed the movement patterns and identified
						several areas where environmental readability
						could be improved. I then iterated on navigation
						systems and level flow to make the environment
						easier to understand.
					</p>

				</section>


				{/* SCREENSHOT GRID */}

				<div className="article-image-grid">

					<figure>
						<img
							src="/Portfolio/images/Ares/aresGameplaySpace1.jpg"
							alt="Space station environment"
						/>

						<figcaption>
							Space station environment
						</figcaption>
					</figure>


					<figure>
						<img
							src="/Portfolio/images/Ares/mall.jpg"
							alt="Space station navigation"
						/>

						<figcaption>
							Navigation and level flow
						</figcaption>
					</figure>

				</div>


				{/* PROCESS */}

				<section className="article-section">

					<div className="section-label">
						05 — Process
					</div>

					<h2>From problem to solution</h2>

					<div className="process-grid">

						<div>
							<span>01</span>
							<h3>Identify</h3>
							<p>
								Analyze player behavior and identify
								the biggest usability problems.
							</p>
						</div>

						<div>
							<span>02</span>
							<h3>Prototype</h3>
							<p>
								Test different gameplay and navigation
								solutions inside Unreal Engine.
							</p>
						</div>

						<div>
							<span>03</span>
							<h3>Iterate</h3>
							<p>
								Use feedback and testing to refine
								the systems.
							</p>
						</div>

						<div>
							<span>04</span>
							<h3>Polish</h3>
							<p>
								Improve responsiveness, readability,
								and overall player experience.
							</p>
						</div>

					</div>

				</section>


				{/* LARGE SCREENSHOT */}

				<figure className="article-figure article-figure-large">
					<img
						src="/Portfolio/images/Ares/thumbnail2.jpg"
						alt="Mars racing environment"
					/>

					<figcaption>
						Racing environment on the terraformed Mars surface.
					</figcaption>
				</figure>


				{/* TECHNOLOGY */}

				<section className="article-section">

					<div className="section-label">
						06 — Technology
					</div>

					<h2>Tools & technologies</h2>

					<div className="project-tech-stack project-tech-stack-large">
						<span className="tech-badge">Unreal Engine 5</span>
						<span className="tech-badge">C++</span>
						<span className="tech-badge">Blueprints</span>
						<span className="tech-badge">AI</span>
						<span className="tech-badge">Navigation</span>
					</div>

				</section>




				{/* LINKS */}

				<section className="article-section article-section-last">

					<div className="section-label">
						07 — Project
					</div>

					<h2>Explore the project</h2>

					<div className="project-links">

						<a
							href="https://store.steampowered.com/app/3652410/ARES_2192/"
							target="_blank"
							rel="noopener noreferrer"
							className="project-link"
						>
							<span className="project-link-text">
								Play on Steam
							</span>

							<span className="project-link-arrow">
								↗
							</span>
						</a>

						<a
							href="https://lnkd.in/p/g54tScv6"
							target="_blank"
							rel="noopener noreferrer"
							className="project-link"
						>
							<span className="project-link-text">
								LinkedIn
							</span>

							<span className="project-link-arrow">
								↗
							</span>
						</a>

					</div>

				</section>

			</div>
		),
	};
}
