import React from 'react';
import './about.css';
import aboutpic from '../../assets/val photo.jpeg';
import { FaCode, FaServer, FaDatabase, FaChartLine } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image-container">
            <img src={aboutpic} alt="Valentine Onuoha" className="about-image" />
            <div className="experience-badge">
              <span className="years">3+</span>
              <span className="text">Years<br/>Experience</span>
            </div>
          </div>
          
          <div className="about-text">
            <p className="about-intro">
              Hi there! I'm Valentine, a passionate Full Stack Developer and Data Specialist with expertise in creating modern, high-performance web applications and data solutions.
            </p>
            
            <p className="about-description">
              I specialize in developing comprehensive software solutions from concept to deployment. My approach combines technical excellence with business acumen to deliver products that not only meet but exceed client expectations. I thrive in collaborative environments and have a proven track record of leading projects to successful completion.
            </p>
            
            <div className="skills-container">
              <div className="skill-card">
                <FaCode className="skill-icon" />
                <h3>Frontend</h3>
                <p>Creating responsive, engaging user interfaces with modern frameworks</p>
              </div>
              
              <div className="skill-card">
                <FaServer className="skill-icon" />
                <h3>Backend</h3>
                <p>Building robust APIs and server architectures that scale</p>
              </div>
              
              <div className="skill-card">
                <FaDatabase className="skill-icon" />
                <h3>Databases</h3>
                <p>Designing efficient data models and storage solutions</p>
              </div>
              
              <div className="skill-card">
                <FaChartLine className="skill-icon" />
                <h3>Data Analysis</h3>
                <p>Extracting actionable insights through advanced analytics</p>
              </div>
            </div>
            
            <div className="about-cta">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;