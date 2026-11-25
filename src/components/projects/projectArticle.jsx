import React from "react";

// Builds the detail page for a project from its entry in data/user.js.
export function projectToArticle(project) {
	return {
		slug: project.slug,
		meta: project.type,
		title: project.title,
		description: project.description,
		keywords: [project.title, ...(project.tools || [])],
		body: <ProjectArticle project={project} />,
	};
}

const ProjectArticle = ({ project }) => {
	const {
		title,
		description,
		image,
		video,
		images = [],
		role,
		engine,
		type,
		tools = [],
		overview = [],
		contributions = [],
		process = [],
		externalLink,
	} = project;

	return (
		<div className="article-content project-article">
			<div className="article-intro">
				<p className="article-lead">{description}</p>

				{tools.length > 0 && (
					<div className="project-tech-stack">
						{tools.map((tool) => (
							<span className="tech-badge" key={tool}>
								{tool}
							</span>
						))}
					</div>
				)}
			</div>

			<figure className="article-figure">
				{video ? (
					<video
						src={video}
						poster={image}
						autoPlay
						muted
						loop
						playsInline
						controls
					/>
				) : (
					<img src={image} alt={title} />
				)}
			</figure>

			<div className="project-info-grid project-info-grid-3">
				<div className="project-info-card">
					<span>Role</span>
					<strong>{role}</strong>
				</div>
				<div className="project-info-card">
					<span>Built with</span>
					<strong>{engine}</strong>
				</div>
				<div className="project-info-card">
					<span>Type</span>
					<strong>{type}</strong>
				</div>
			</div>

			{overview.length > 0 && (
				<section className="article-section">
					<h2>About</h2>
					{overview.map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</section>
			)}

			{contributions.length > 0 && (
				<section className="article-section">
					<h2>What I built</h2>
					<ul className="project-article-list">
						{contributions.map((text, i) => (
							<li key={i}>{text}</li>
						))}
					</ul>
				</section>
			)}

			{process.length > 0 && (
				<section className="article-section">
					<h2>How it works</h2>
					{process.map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</section>
			)}

			{images.length > 0 && (
				<div className="article-image-grid">
					{images.map((img) => (
						<figure key={img.src}>
							<img src={img.src} alt={img.caption || title} />
							{img.caption && (
								<figcaption>{img.caption}</figcaption>
							)}
						</figure>
					))}
				</div>
			)}

			{externalLink && (
				<section className="article-section article-section-last">
					<div className="project-links">
						<a
							href={externalLink.url}
							target="_blank"
							rel="noopener noreferrer"
							className="project-link"
						>
							<span className="project-link-text">
								{externalLink.label}
							</span>
							<span className="project-link-arrow">↗</span>
						</a>
					</div>
				</section>
			)}
		</div>
	);
};

export default ProjectArticle;
