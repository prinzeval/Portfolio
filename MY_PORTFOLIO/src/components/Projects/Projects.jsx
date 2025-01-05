import React from 'react';
import './project.css';
import project1 from '../../assets/possibility.png';
import project2 from '../../assets/smart quiz.png';
import project3 from '../../assets/logo.png';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="title">Projects</h2>
            <div className="project-container">
                <div className="project-card">
                    <img src={project1} alt="Project 1" className="project-img" />
                    <h3 className="project-title">Web scrappers Project</h3>
                    <p>A Fullstack project ,Extract data from any website,Then stores the scraped data in the database for easy Retrieval</p>
                    <div className="project-buttons">
                        <a href="https://github.com/prinzeval/cmnd-scrapper-python" target="_blank" rel="noopener noreferrer">
                            <button className="project-button">GitHub</button>
                        </a>
                        <a href="https://scraper-ui-9xwy.onrender.com/" target="_blank" rel="noopener noreferrer">
                            <button className="project-button">Live Demo</button>
                        </a>
                    </div>
                </div>
                <div className="project-card">
                    <img src={project2} alt="Project 2" className="project-img" />
                    <h3 className="project-title"> SmartQuiz </h3>
                    <p> SmartQuiz
                        Turn Text into Interactive Quizzes information , generates a set of 50 difficult multiple-choice questions in the following format:

                    </p>
                    <div className="project-buttons">
                        <a href="https://github.com/prinzeval/QuizApp" target="_blank" rel="noopener noreferrer">
                            <button className="project-button">GitHub</button>
                        </a>
                        <a href="https://quizapp-j0d1.onrender.com/" target="_blank" rel="noopener noreferrer">
                            <button className="project-button">Live Demo</button>
                        </a>
                    </div>
                </div>
                <div className="project-card">
                    <img src={project3} alt="Project 3" className="project-img" />
                    <h3 className="project-title">Gpt3-landing</h3>
                    <p>A dynamic web application built with React, leveraging reusable components for an efficient and modular design. This project showcases React's flexibility</p>
                    <div className="project-buttons">
                        <a href="https://github.com/prinzeval" target="_blank" rel="noopener noreferrer">
                            <button className="project-button">GitHub</button>
                        </a>
                        <a href="https://react-gpt3-landing.onrender.com/" target="_blank" rel="noopener noreferrer">
                            <button className="project-button">Live Demo</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
