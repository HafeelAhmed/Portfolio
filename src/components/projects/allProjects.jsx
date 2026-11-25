import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Project from "./project";
import INFO from "../../data/user";

import "./styles/allProjects.css";

// `slugs` picks specific projects in the given order; otherwise all are shown.
const AllProjects = ({ limit, slugs }) => {
	const filtered = slugs
		? slugs
				.map((slug) => INFO.projects.find((p) => p.slug === slug))
				.filter(Boolean)
		: INFO.projects;

	const projects = limit ? filtered.slice(0, limit) : filtered;

	const hasMoreProjects = limit && filtered.length > limit;

	return (
		<div className="all-projects-section">
			<div className="all-projects-container">
				{projects.map((project) => (
					<div
						className="all-projects-project"
						key={project.slug}
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
