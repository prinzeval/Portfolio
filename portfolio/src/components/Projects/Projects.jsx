import React from 'react';
import './project.css';
import project1 from '../../assets/project-1.png';
import project2 from '../../assets/project-2.png';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="title">Projects</h2>
      <div className="project-container">
        <div className="project-card">
          <img src={project1} alt="Project 1" className="project-img" />
          <h3 className="project-title">Project 1</h3>
        </div>
        <div className="project-card">
          <img src={project2} alt="Project 2" className="project-img" />
          <h3 className="project-title">Project 2</h3>
        </div>
      </div>
    </section>
  );
};

export default Projects;
