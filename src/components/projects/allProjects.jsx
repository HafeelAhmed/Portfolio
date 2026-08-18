import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Project from "./project";
import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = ({ limit }) => {
	const projects = limit
		? INFO.projects.slice(0, limit)
		: INFO.projects;

	const hasMoreProjects =
		limit && INFO.projects.length > limit;

	return (
		<div className="all-projects-section">
			<div className="all-projects-container">
				{projects.map((project, index) => (
					<div
						className="all-projects-project"
						key={index}
					>
						<Project
							image={project.image}
							title={project.title}
							description={project.description}
							tech={project.tech}
							engine={project.engine}
							link={project.link}
							isExternal={project.isExternal}
						/>
					</div>
				))}
			</div>

			{hasMoreProjects && (
				<div className="projects-see-more">
					<Link to="/Portfolio/projects">
						<span>See More</span>

						<FontAwesomeIcon
							icon={faArrowRight}
							className="projects-see-more-icon"
						/>
					</Link>
				</div>
			)}
		</div>
	);
};

export default AllProjects;
