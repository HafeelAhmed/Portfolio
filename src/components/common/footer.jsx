import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/Portfolio">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/Portfolio/about">About</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/Portfolio/projects">Projects</Link>
						</li>

						<li className="footer-nav-link-item">
							<Link to="/Portfolio/contact">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2026 Hafeel Ahmed · Thanjavur, India
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
