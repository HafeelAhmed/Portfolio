import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./Portfolio/TenderizerGames.jpg"
								alt="TenderizerGames"
								className="work-image"
							/>
							<div className="work-title">TenderizerGames</div>
							<div className="work-subtitle">
								Game Developer
							</div>
							<div className="work-duration">2026 - Present</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
