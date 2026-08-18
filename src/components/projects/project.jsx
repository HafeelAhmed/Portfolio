import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRight,
	faLink,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const {
		image,
		title,
		description,
		tech,
		engine = "UE5",
		link,
		isExternal,
	} = props;

	const projectAction = link && (
		<div className="project-action">
			<FontAwesomeIcon
				icon={isExternal ? faLink : faArrowRight}
				className="project-action-icon"
			/>
			<span>View Project</span>
		</div>
	);

	const content = (
		<div className="project-card">
			{/* Image section */}
			<div className="project-image-wrapper">
				<img
					className="project-image"
					src={image}
					alt={`${title} screenshot`}
				/>

				{/* Engine badge */}
				{engine && (
					<div className="project-engine">
						{engine}
					</div>
				)}
			</div>

			{/* Content section */}
			<div className="project-info">
				<div className="project-title">
					{title}
				</div>

				<div className="project-description">
					{description}
				</div>

				{tech && (
					<div className="project-tech">
						{tech}
					</div>
				)}

				{/* View project */}
				{projectAction}
			</div>
		</div>
	);

	return (
		<div className="project">
			{link ? (
				isExternal ? (
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
					>
						{content}
					</a>
				) : (
					<Link to={link}>
						{content}
					</Link>
				)
			) : (
				content
			)}
		</div>
	);
};

export default Project;
