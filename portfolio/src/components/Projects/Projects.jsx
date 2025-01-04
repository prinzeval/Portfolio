import React from 'react';
import './project.css';
import project1 from '../../assets/project-1.png';
import project2 from '../../assets/project-2.png';
import project3 from '../../assets/project-3.png'; // Added for the third project

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="title">Projects</h2>
      <div className="project-container">
        <div className="project-card">
          <img src={project1} alt="Project 1" className="project-img" />
          <h3 className="project-title">Project One</h3>
          <p>Better Communication with Each Other</p>
          <div className="project-buttons">
            <button className="project-button">GitHub</button>
            <button className="project-button">Live Demo</button>
          </div>
        </div>
        <div className="project-card">
          <img src={project2} alt="Project 2" className="project-img" />
          <h3 className="project-title">Project Two</h3>
          <p>Reminders and Motivational Messages</p>
          <div className="project-buttons">
            <button className="project-button">GitHub</button>
            <button className="project-button">Live Demo</button>
          </div>
        </div>
        <div className="project-card">
          <img src={project3} alt="Project 3" className="project-img" />
          <h3 className="project-title">Project Three</h3>
          <p>Available now on the app with a 15% discount offer</p>
          <div className="project-buttons">
            <button className="project-button">GitHub</button>
            <button className="project-button">Live Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
