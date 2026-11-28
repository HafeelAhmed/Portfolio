import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Seo from "../components/common/seo";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Seo
				title={currentSEO.title}
				description={currentSEO.description}
				path={currentSEO.path}
				keywords={currentSEO.keywords}
			/>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">Projects</div>

						<div className="subtitle projects-subtitle">
							Games and prototypes I've built, mostly in Unreal
							Engine 5, plus a C++ simulation project. Open any
							of them to see what I built and how.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
