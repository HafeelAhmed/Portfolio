import React from "react";
import { Link } from "react-router-dom";

import { getArticleLink } from "../links";

export function article_3() {
	return {
		slug: "life-simulator",

		meta: "Personal project · Unreal Engine 5",

		title: "Life Simulator",

		description:
			"My Grid Evolution simulation running inside Unreal Engine 5.8: the same evolved neural-network creatures, now with smooth continuous movement, a 3D top-down view and a live inspector.",

		keywords: [
			"Unreal Engine 5",
			"C++20",
			"Neuroevolution",
			"Artificial life",
			"Instanced Static Meshes",
			"Enhanced Input",
		],

		body: (
			<div className="article-content">
				<div className="article-intro">
					<p className="article-lead">
						When I built{" "}
						<Link to={getArticleLink("grid-evolution")}>
							Grid Evolution
						</Link>
						, I kept the simulation independent of the renderer so
						I could use it in Unreal one day. This project does
						that. The same creatures, brains and evolution run
						inside Unreal Engine 5.8, and the grid is replaced by
						smooth, continuous movement.
					</p>

					<div className="project-tech-stack">
						<span className="tech-badge">Unreal Engine 5.8</span>
						<span className="tech-badge">C++20</span>
						<span className="tech-badge">Enhanced Input</span>
						<span className="tech-badge">Instanced Static Meshes</span>
						<span className="tech-badge">CMake</span>
					</div>
				</div>

				<p className="article-note">
					This Unreal project is still a prototype. I added it to my
					portfolio to show what I'm working on right now. If you can
					still read this note, I'm still improving it and adding new
					things to it.
				</p>

				<figure className="article-figure article-figure-large">
					<video
						src="/Portfolio/videos/life-simulator.mp4"
						poster="/Portfolio/images/life-simulator/start.jpg"
						autoPlay
						muted
						loop
						playsInline
						controls
					/>
					<figcaption>
						A trained population at 20 ticks per second, then the
						camera following the fittest creature. The dotted
						circle and spokes are what its brain can see.
					</figcaption>
				</figure>

				<div className="project-info-grid">
					<div className="project-info-card">
						<span>Engine</span>
						<strong>Unreal Engine 5.8</strong>
					</div>
					<div className="project-info-card">
						<span>Language</span>
						<strong>C++20</strong>
					</div>
					<div className="project-info-card">
						<span>Brain</span>
						<strong>44-16-16-4 network</strong>
					</div>
					<div className="project-info-card">
						<span>Tests</span>
						<strong>52 unit tests</strong>
					</div>
				</div>

				<section className="article-section">
					<h2>Why I made it</h2>

					<p>
						In Grid Evolution the simulation never touches the
						renderer, and raylib only draws it. I wanted to check
						that this held up with a different engine on top, so
						I moved the simulation core into Unreal and let Unreal
						handle the drawing, input, camera and UI.
					</p>

					<p>
						I also wanted the creatures to move more naturally.
						On a grid they jump one cell at a time. Here they steer
						with a heading and speed, have inertia, push each
						other aside, and glide smoothly at any frame rate.
					</p>
				</section>

				<section className="article-section">
					<h2>From a grid to continuous space</h2>

					<p>
						Most of the core carried over unchanged: the random
						number generator, the network and forward pass,
						evolution, the best-brain tracking, the energy
						economy, the fitness formula, episodes and the brain
						file format. What had to change was everything that
						assumed cells.
					</p>

					<table className="article-table">
						<thead>
							<tr>
								<th></th>
								<th>Grid Evolution</th>
								<th>Life Simulator</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Space</td>
								<td>Cells, one entity each</td>
								<td>Float positions, discs that push apart</td>
							</tr>
							<tr>
								<td>Neighbour lookup</td>
								<td>Occupancy grid</td>
								<td>2 m spatial hash</td>
							</tr>
							<tr>
								<td>Senses</td>
								<td>5×5 cells, 123 inputs</td>
								<td>8 sectors around the body, 44 inputs</td>
							</tr>
							<tr>
								<td>Brain outputs</td>
								<td>Pick 1 of 7 actions</td>
								<td>Turn, throttle, attack, consume</td>
							</tr>
							<tr>
								<td>Per tick</td>
								<td>One action</td>
								<td>Move, eat on contact and attack together</td>
							</tr>
							<tr>
								<td>Attacking</td>
								<td>Any adjacent cell</td>
								<td>Within a 120° cone in front</td>
							</tr>
						</tbody>
					</table>

					<p>
						A 5×5 cell view means nothing without cells, so each
						creature now sees the world as 8 pie slices around
						its body. Each slice reports how close the nearest
						food, creature, Destroyer and wall are, and how much
						energy the nearest body has. This maps well to
						steering, since "food in my front-left slice" easily
						becomes "turn left a little". Because the network
						shape changed, the old grid brains can't be loaded,
						so I trained new ones.
					</p>
				</section>

				<section className="article-section">
					<h2>Making movement cost energy</h2>

					<p>
						With the original energy numbers, continuous
						movement made life too easy. A creature gliding at
						full speed sweeps a lot of ground and eats on
						contact, so even random brains survived to the 5,000
						tick cap on 4 of 5 seeds. In the grid version they
						died out after about 386 ticks. With no pressure to
						survive, evolution has nothing to select for.
					</p>

					<p>
						To fix this, moving now costs 0.5 energy per metre.
						Random brains die out again, and trained ones keep
						going. Tested on 8 seeds the brain had
						never seen, with a 3,000 tick cap:
					</p>

					<table className="article-table">
						<thead>
							<tr>
								<th>Brains</th>
								<th>Ticks until all die</th>
								<th>Food eaten</th>
								<th>Time idle</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Random</td>
								<td>2,519</td>
								<td>2,219</td>
								<td>20.2%</td>
							</tr>
							<tr>
								<td>Trained</td>
								<td>3,000 (the cap, every seed)</td>
								<td>3,780</td>
								<td>0.2%</td>
							</tr>
						</tbody>
					</table>
				</section>

				<section className="article-section">
					<h2>Trained creatures hunt the Destroyers</h2>

					<p>
						The fitness function pays a big bonus for killing a
						Destroyer, and in continuous
						space a group of creatures can surround one while it
						stands still to attack, and chip away at it from
						several sides. The trained population now goes after
						the Destroyers on purpose. In the run below, 8 of the
						9 were gone within 400 ticks.
					</p>
				</section>

				<div className="article-image-grid">
					<figure>
						<img
							src="/Portfolio/images/life-simulator/start.jpg"
							alt="Tick 102 with 8 Destroyers"
						/>
						<figcaption>
							Tick 102, with 8 Destroyers (orange diamonds) left.
						</figcaption>
					</figure>
					<figure>
						<img
							src="/Portfolio/images/life-simulator/overview.jpg"
							alt="Tick 390 with 1 Destroyer left"
						/>
						<figcaption>Tick 390, with only 1 left.</figcaption>
					</figure>
				</div>

				<section className="article-section">
					<h2>The Unreal side</h2>

					<p>
						The simulation core never includes an Unreal header.
						It's compiled into the game module, and the same
						source files also build a standalone trainer and
						test runner with CMake. One actor,{" "}
						<code>ALifeSimManager</code>, owns the simulation, and
						it is the only place where simulation types are
						converted to Unreal types.
					</p>

					<div className="feature-list">
						<div className="feature-item">
							<span className="feature-number">01</span>
							<div>
								<h3>Fixed timestep with interpolation</h3>
								<p>
									The simulation runs in whole ticks at a
									chosen speed (1 to 640 ticks per second,
									or max), with a 12 ms budget per frame so
									it can't stall the game. Each body's pose
									is interpolated between the last two
									ticks, so movement stays smooth at 60 fps
									even at 5 ticks per second.
								</p>
							</div>
						</div>

						<div className="feature-item">
							<span className="feature-number">02</span>
							<div>
								<h3>Instanced rendering</h3>
								<p>
									Everything is drawn with Instanced Static
									Mesh components and one material that
									reads colour and glow from per-instance
									custom data. Instances are never removed,
									only hidden and reused, and each component
									gets one batched transform update per
									frame.
								</p>
							</div>
						</div>

						<div className="feature-item">
							<span className="feature-number">03</span>
							<div>
								<h3>Input and HUD in code</h3>
								<p>
									All Enhanced Input actions and the mapping
									context are created in C++, so there are no
									input assets to maintain. The HUD shows
									world stats, a best-fitness-per-episode
									chart and an inspector for the selected
									creature, including its live brain output.
								</p>
							</div>
						</div>
					</div>
				</section>

				<figure className="article-figure">
					<img
						src="/Portfolio/images/life-simulator/follow.jpg"
						alt="Following the fittest creature with the inspector open"
					/>
					<figcaption>
						Following the fittest creature. The inspector shows
						its generation, energy, kills and "Brain says": the
						network's live turn and throttle values.
					</figcaption>
				</figure>

				<section className="article-section">
					<h2>Problems along the way</h2>

					<p>
						The first problem was name clashes. Unreal has
						globals like <code>GWarn</code> and{" "}
						<code>GEngine</code>, so a file-local constant with a
						similar name became an ambiguous symbol. Several
						simulation files also use helpers with the same name in
						anonymous namespaces, which collide in Unreal's unity
						builds, so I turned unity builds off for this module.
					</p>

					<p>
						The colours also looked washed out, because
						auto-exposure brightened the mostly dark arena, so I
						set a fixed manual exposure on the camera. The energy
						colour (blue when full, red when starving) looked pink
						in the middle, because blending in HSV passes through
						magenta, so I switched to a plain RGB blend.
					</p>
				</section>

				<section className="article-section article-section-last">
					<h2>Training</h2>

					<p>
						The headless trainer runs the exact same simulation
						code at about 11,500 ticks per second on one CPU core.
						The brain the game loads at startup took 400
						episodes, about 70 seconds. Inside the game you can
						also turn the speed to max and watch evolution happen,
						at about 7,000 ticks per second with everything still
						being drawn.
					</p>
				</section>

				<figure className="article-figure">
					<img
						src="/Portfolio/images/life-simulator/training.jpg"
						alt="Running at max speed after 124 episodes"
					/>
					<figcaption>
						At max speed the game ran 124 episodes and over
						600,000 ticks in about a minute and a half. The chart on the right
						shows the best fitness of each episode.
					</figcaption>
				</figure>
			</div>
		),
	};
}

export default article_3;
