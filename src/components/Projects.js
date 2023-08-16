import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import data from '../data';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
        >
          {data.projects.map((project, index) => (
            <div className={`project-card ${project.video ? '' : 'centered'}`} key={index}>
              <h3 className="project-title">{project.name}</h3>
              <div className="project-image">
                {project.image && (
                  <img src={project.image} alt={project.name} />
                )}
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.video && (
                  <a href={project.video} target="_blank" rel="noopener noreferrer">Watch Video</a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
