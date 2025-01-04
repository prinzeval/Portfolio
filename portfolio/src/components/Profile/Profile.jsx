import React from 'react';
import './profile.css';
import profilePic from '../../assets/profile-pic.png';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';

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
          <img src={linkedinIcon} alt="LinkedIn" className="icon" />
          <img src={githubIcon} alt="GitHub" className="icon" />
        </div>
        <div className="btn-container">
          <button className="btn btn-color-1">Download CV</button>
          <button className="btn btn-color-2">Contact Info</button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
