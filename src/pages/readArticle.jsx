import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Notfound from "./404";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/readArticle.css";
import "./styles/article-content.css";

const ReadArticle = () => {
	const navigate = useNavigate();
	const { slug } = useParams();

	// Find custom article by slug
	const customArticle = myArticles.find(
		(article) => article().slug === slug,
	);

	// Fallback for numeric project URLs
	const projectIndex = parseInt(slug, 10) - 1;
	const projectInfo = INFO.projects[projectIndex];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [slug]);

	// Nothing found
	if (!customArticle && !projectInfo) {
		return <Notfound />;
	}

	// Custom article
	const articleData = customArticle
		? customArticle()
		: {
				date: "7 May 2023",
				title: projectInfo?.title || `Project ${slug}`,
				description:
					projectInfo?.description ||
					"A modern project built to deliver high performance, clean design, and smooth user experience.",
				keywords: [
					projectInfo?.title || "Project",
					"Portfolio",
					"React",
				],
				body: (
					<React.Fragment>
						<div className="article-content">
							<h2>
								About {projectInfo?.title || `Project ${slug}`}
							</h2>

							<p>
								{projectInfo?.description ||
									"This project showcases modern web application development practices with clean code architecture and responsive design."}
							</p>

							<div className="project-tech-stack">
								<span className="tech-badge">React</span>
								<span className="tech-badge">JavaScript</span>
								<span className="tech-badge">CSS3</span>
								<span className="tech-badge">HTML5</span>
							</div>

							<h3>Key Features</h3>

							<ul>
								<li>
									Responsive & modern user interface design.
								</li>

								<li>
									Seamless routing and client-side page
									transitions.
								</li>

								<li>
									Optimized performance and scalable
									architecture.
								</li>
							</ul>

							<h3>Project Details</h3>

							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>

							{projectInfo?.logo && (
								<img
									src={projectInfo.logo}
									alt={projectInfo.title}
									className="project-banner"
								/>
							)}
						</div>
					</React.Fragment>
				),
			};

	return (
		<React.Fragment>
			<Helmet>
				<title>
					{`${articleData.title} | ${INFO.main.title}`}
				</title>

				<meta
					name="description"
					content={articleData.description}
				/>

				<meta
					name="keywords"
					content={
						articleData.keywords
							? articleData.keywords.join(", ")
							: ""
					}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">

					{/* Logo */}
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					{/* Article */}
					<div className="read-article-container">

						{/* Back Button */}
						<div className="read-article-back">
							<img
								src="../back-button.png"
								alt="Back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						{/* Article Content */}
						<div className="read-article-wrapper">

							<div className="read-article-date-container">
								<div className="read-article-date">
									{articleData.date}
								</div>
							</div>

							<div className="title read-article-title">
								{articleData.title}
							</div>

							<div className="read-article-body">
								{articleData.body}
							</div>

						</div>
					</div>

					{/* Footer */}
					<div className="page-footer">
						<Footer />
					</div>

				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadArticle;