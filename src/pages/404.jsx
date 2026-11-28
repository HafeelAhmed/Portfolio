import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/common/navBar";
import Seo from "../components/common/seo";
import Logo from "../components/common/logo";


import "./styles/404.css";

const Notfound = () => {
	return (
		<React.Fragment>
			<Seo
				title="Page not found"
				description="This page does not exist."
				path="/Portfolio/404"
				noindex
			/>
			<div className="not-found page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="notfound-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="notfound-container">
						<div className="notfound-message">
							<div className="notfound-title">
								Oops! <FontAwesomeIcon icon={faFaceSadTear} />
							</div>
							<div className="not-found-message">
								The page you're looking for doesn't exist.
							</div>
							<a href="/Portfolio" className="not-found-link">
								Go back to the home page
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
