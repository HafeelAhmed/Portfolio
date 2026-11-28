import React from "react";

export function article_1() {
	return {
		slug: "ares2192",

		meta: "Tenderizer Games",

		title: "ARES 2192",

		description:
			"Sci-fi racer built in Unreal Engine 5, with a space station hub and races on a terraformed Mars. I work on its vehicle AI, NPCs, Buddy AI and navigation.",

		keywords: [
			"ARES 2192",
			"Unreal Engine 5",
			"C++",
			"Blueprints",
			"Vehicle AI",
			"Navigation",
			"Tenderizer Games",
		],

		body: (
			<div className="article-content">
				<div className="article-intro">
					<p className="article-lead">
						ARES 2192 is a sci-fi racing game. Between races you
						live on a space station, and the races themselves
						happen on a terraformed Mars. I've been on the team
						since an early stage of the demo, working mainly on AI
						and navigation.
					</p>

					<div className="project-tech-stack">
						<span className="tech-badge">Unreal Engine 5</span>
						<span className="tech-badge">C++</span>
						<span className="tech-badge">Blueprints</span>
					</div>
				</div>

				<figure className="article-figure article-figure-large">
					<video
						src="/Portfolio/videos/ares-demo.mp4"
						poster="/Portfolio/images/Ares/AresThumbnail.jpg"
						autoPlay
						muted
						loop
						playsInline
						controls
					/>
				</figure>

				<div className="project-info-grid">
					<div className="project-info-card">
						<span>Studio</span>
						<strong>Tenderizer Games</strong>
					</div>

					<div className="project-info-card">
						<span>Role</span>
						<strong>Gameplay Programmer</strong>
					</div>

					<div className="project-info-card">
						<span>Engine</span>
						<strong>Unreal Engine 5</strong>
					</div>

					<div className="project-info-card">
						<span>My focus</span>
						<strong>AI & navigation</strong>
					</div>
				</div>

				<section className="article-section">
					<h2>What I work on</h2>

					<div className="feature-list">
						<div className="feature-item">
							<span className="feature-number">01</span>
							<div>
								<h3>Vehicle AI</h3>
								<p>
									Movement and responsiveness for the
									AI-driven cars.
								</p>
							</div>
						</div>

						<div className="feature-item">
							<span className="feature-number">02</span>
							<div>
								<h3>Car navigation</h3>
								<p>
									Pathfinding for the cars, so they can get
									around the tracks and the station's more
									complicated areas without getting stuck.
								</p>
							</div>
						</div>

						<div className="feature-item">
							<span className="feature-number">03</span>
							<div>
								<h3>NPCs</h3>
								<p>
									Behaviour for the NPCs that fill the
									station, so it feels lived in.
								</p>
							</div>
						</div>

						<div className="feature-item">
							<span className="feature-number">04</span>
							<div>
								<h3>Buddy AI</h3>
								<p>
									A companion system, still in
									development. Right now it covers
									cosmetic behaviour; interactions come
									next.
								</p>
							</div>
						</div>
					</div>
				</section>

				<div className="article-image-grid">
					<figure>
						<img
							src="/Portfolio/images/Ares/ares-A.jpg"
							alt="Racing gameplay"
						/>
					</figure>
					<figure>
						<img
							src="/Portfolio/images/Ares/ares-B.jpg"
							alt="Overtaking an AI car"
						/>
					</figure>
					<figure>
						<img
							src="/Portfolio/images/Ares/ares-C.jpg"
							alt="Track by the water"
						/>
					</figure>
					<figure>
						<img
							src="/Portfolio/images/Ares/aresGameplay1.jpg"
							alt="AI cars on track"
						/>
					</figure>
				</div>

				<section className="article-section">
					<h2>Getting around the space station</h2>

					<p>
						When I joined, the space station was hard to navigate.
						Players regularly got lost and couldn't tell where they
						were supposed to go next.
					</p>

					<p>
						I looked at where players were getting stuck and
						turned around, then worked through those spots one at
						a time. That meant fixing AI pathing, changing the
						level flow and making the environment easier to read,
						so players can see which way to go.
					</p>
				</section>

				<div className="article-image-grid">
					<figure>
						<img
							src="/Portfolio/images/Ares/aresGameplaySpace1.jpg"
							alt="Space station"
						/>
						<figcaption>The space station hub</figcaption>
					</figure>
					<figure>
						<img
							src="/Portfolio/images/Ares/mall.jpg"
							alt="Station mall area"
						/>
						<figcaption>The mall area of the station</figcaption>
					</figure>
					<figure>
						<img
							src="/Portfolio/images/Ares/ares-F.jpg"
							alt="Station interior"
						/>
						<figcaption>Inside the station</figcaption>
					</figure>
					<figure>
						<img
							src="/Portfolio/images/Ares/aresGameplaySpace2.jpg"
							alt="Space station exterior"
						/>
					</figure>
				</div>

				<section className="article-section">
					<h2>Working on a game that is still changing</h2>

					<p>
						The design is still moving, so I try to build systems
						that can be extended later without a rewrite. My
						changes go into the demo and are tested internally,
						and the feedback goes into the next pass.
					</p>
				</section>

				<div className="article-image-grid">
					<figure>
						<img
							src="/Portfolio/images/Ares/ares-H.jpg"
							alt="Snowy section of track"
						/>
					</figure>
					<figure>
						<img
							src="/Portfolio/images/Ares/ares-J.jpg"
							alt="Tunnel section"
						/>
					</figure>
					<figure>
						<img
							src="/Portfolio/images/Ares/ares-E.jpg"
							alt="Mars terrain"
						/>
					</figure>
					<figure>
						<img
							src="/Portfolio/images/Ares/thumbnail2.jpg"
							alt="Racing on Mars"
						/>
					</figure>
				</div>

				<section className="article-section article-section-last">
					<p>
						ARES 2192 is the intellectual property of Tenderizer
						Games.
					</p>

					<div className="project-links">
						<a
							href="https://store.steampowered.com/app/3652410/ARES_2192/"
							target="_blank"
							rel="noopener noreferrer"
							className="project-link"
						>
							<span className="project-link-text">
								Steam page
							</span>
							<span className="project-link-arrow">↗</span>
						</a>

						<a
							href="https://lnkd.in/p/g54tScv6"
							target="_blank"
							rel="noopener noreferrer"
							className="project-link"
						>
							<span className="project-link-text">
								LinkedIn post
							</span>
							<span className="project-link-arrow">↗</span>
						</a>
					</div>
				</section>
			</div>
		),
	};
}

export default article_1;
