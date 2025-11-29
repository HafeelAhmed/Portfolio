// src/ProjectPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { projectsData } from './data/projectsData';
import './styles/ProjectPage.css';

export const ProjectPage = () => {
  const navigate = useNavigate();

  const handleViewProject = (id) => {
    navigate(`/Portfolio/projects/${id}`);
  };

  return (
    <section className="project-page-section">
      <Container>
        <div className="project-page-header">
          <h1 className="project-page-title">Projects</h1>
          <p className="project-page-subtitle">
            Explore a curated selection of gameplay systems, prototypes, and 3D work.
          </p>
        </div>

        <div className="project-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image">
                {project.imageUrls && project.imageUrls.length > 0 && (
                  <img
                    src={project.imageUrls[0]}
                    alt={project.title}
                    loading="lazy"
                  />
                )}
              </div>

              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  {project.role && (
                    <span className="project-role">
                      {project.role}
                    </span>
                  )}
                </div>

                <h2 className="project-name">{project.title}</h2>

                {project.description && (
                  <p className="project-description">
                    {project.description.length > 140
                      ? `${project.description.substring(0, 140)}...`
                      : project.description}
                  </p>
                )}

                {project.usedTools && project.usedTools.length > 0 && (
                  <div className="project-tools">
                    {project.usedTools.slice(0, 4).map((tool, index) => (
                      <span key={index} className="project-tool-pill">
                        {tool}
                      </span>
                    ))}
                    {project.usedTools.length > 4 && (
                      <span className="project-tool-pill more-pill">+{project.usedTools.length - 4}</span>
                    )}
                  </div>
                )}

                <div className="project-card-footer">
                  <button
                    className="project-view-button"
                    onClick={() => handleViewProject(project.id)}
                  >
                    View Project
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectPage;
