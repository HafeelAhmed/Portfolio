import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Notfound from "./404";

import INFO from "../data/user";
import myArticles from "../data/articles";
import { projectToArticle } from "../components/projects/projectArticle";

import "./styles/readArticle.css";
import "./styles/article-content.css";

const ReadArticle = () => {
	const navigate = useNavigate();
	const { slug } = useParams();

	// A hand-written article wins; otherwise build the page from the
	// project's data in user.js.
	const customArticle = myArticles.find(
		(article) => article().slug === slug,
	);
	const project = INFO.projects.find((p) => p.slug === slug);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [slug]);

	if (!customArticle && !project) {
		return <Notfound />;
	}

	const articleData = customArticle
		? customArticle()
		: projectToArticle(project);

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
								src="/Portfolio/back-button.png"
								alt="Back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						{/* Article Content */}
						<div className="read-article-wrapper">

							{articleData.meta && (
								<div className="read-article-date-container">
									<div className="read-article-date">
										{articleData.meta}
									</div>
								</div>
							)}

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