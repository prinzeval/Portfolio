import React from 'react';
import './profile.css';
import profilePic from '../../assets/val pic 2.jpeg';
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6';

const Profile = () => {
  return (
    <section id="home" className="profile-section">
      <div className="profile-content">
        <div className="profile-text">
          <div className="profile-tagline">Full Stack Developer & Data Specialist</div>
          <h1>Valentine Onuoha</h1>
          <p className="profile-description">
            I build scalable, high-performance web applications and data solutions that drive business growth and innovation.
          </p>
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
          <div className="profile-actions">
            <a href="#contact" className="btn btn-secondary">Let's Talk</a>
          </div>
        </div>
        <div className="profile-image-container">
          <div className="profile-image-wrapper">
            <img src={profilePic} alt="Valentine Onuoha" className="profile-image" />
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/onuoha-valentine-b62447224/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/prinzeval" target="_blank" rel="noopener noreferrer">
              <FaSquareGithub className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L60,64C120,64,240,64,360,53.3C480,43,600,21,720,16C840,11,960,21,1080,32C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Profile;