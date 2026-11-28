import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Seo from "../components/common/seo";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Seo
				title={currentSEO.title}
				description={currentSEO.description}
				path={currentSEO.path}
				keywords={currentSEO.keywords}
			/>

			<div className="page-content">
				<NavBar active="contact" />

				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">Contact</div>

						<div className="subtitle contact-subtitle">
							Email is the quickest way to reach me:{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I'm also on{" "}
							<a
								href={INFO.socials.discord}
								target="_blank"
								rel="noreferrer"
							>
								Discord
							</a>{" "}
							and{" "}
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								LinkedIn
							</a>
							.
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;
