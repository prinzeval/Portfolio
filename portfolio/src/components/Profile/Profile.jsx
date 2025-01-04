import React from 'react';
import './profile.css';
import profilePic from '../../assets/profile-pic.png';

import linkedinIcon from '../../assets/linkedin.png';

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hi, I'm</p>
        <p className="section__text__p2">Valentine Onuoha</p>
        <p className="section__text__p3">A Front-End Developer</p>
        <div id="socials-container">
          
          <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        </div>
        <div className="btn-container">
          <button className="btn btn-color-1">Hire Me</button>
          <button className="btn btn-color-2">Resume</button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
