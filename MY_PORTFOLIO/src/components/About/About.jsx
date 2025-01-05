import React from 'react';
import './about.css';
import aboutpic from '../../assets/val photo.jpeg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-img-container">
        <img src={aboutpic} alt="About" className="about-img" />
      </div>
      <div className="about-details">
        <h2>About Me</h2>
        <p>
          I am Valentine Onuoha Chinaechetam, a passionate Fullstack developer
          with experience in creating beautiful and functional web interfaces and APIs.
          I enjoy solving challenging problems and turning ideas into reality. Currently pursuing a Bachelor’s Degree in Computer Engineering at European University of Lefke.
        </p>
      </div>
    </section>
  );
};

export default About;
