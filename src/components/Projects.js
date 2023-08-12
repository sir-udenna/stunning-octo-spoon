import React from 'react';
import data from '../data'; 
import './Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {data.projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.video && (
                  <a href={project.video} target="_blank" rel="noopener noreferrer">Watch Video</a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
