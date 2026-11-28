import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Seo from "../components/common/seo";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";
import { getArticleLink } from "../data/links";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Seo
				title={currentSEO.title}
				description={currentSEO.description}
				path={currentSEO.path}
				keywords={currentSEO.keywords}
			/>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
							{INFO.articles.title}
						</div>

						<div className="subtitle articles-subtitle">
							{INFO.articles.description}
						</div>

						<div className="articles-container">
							<div className="articles-wrapper">
								{myArticles.map((article, index) => {
									const data = article();
									return (
										<div
											className="articles-article"
											key={data.slug}
										>
											<Article
												date={data.meta}
												title={data.title}
												description={data.description}
												link={getArticleLink(data.slug)}
											/>
										</div>
									);
								})}
							</div>
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

export default Articles;