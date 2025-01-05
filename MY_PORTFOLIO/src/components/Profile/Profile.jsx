import React from 'react';
import './profile.css';
import profilePic from '../../assets/val pic 2.jpeg';
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6';
import CV from '../../assets/VALENDATA_CV.pdf'; // Import the CV file

const Profile = () => {
  return (
    <section id="profile" className="profile-section">
      <div className="profile-pic-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
      <div className="profile-details">
        <h2>Hello, I'm</h2>
        <h1>Valentine Onuoha</h1>
        <h3>A Fullstack Developer</h3>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/onuoha-valentine-b62447224/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://github.com/prinzeval" target="_blank" rel="noopener noreferrer">
            <FaSquareGithub className="icon" />
          </a>
        </div>
        <div className="btn-container">
          <a href={CV} download="VALENDATA_CV.pdf">
            <button className="btn btn-color-1">Download CV</button>
          </a>
          <button className="btn btn-color-2">Contact Info</button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
