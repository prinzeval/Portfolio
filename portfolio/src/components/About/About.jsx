import React from 'react';
import './about.css';
import aboutpic from '../../assets/about-pic.png';
const About = () => {
  return (
    <section id="about">
      <div className="section-container about-containers">
        <div className="details-container">
          <h2>About Me</h2>
          <p>
            I am a passionate front-end developer with experience in creating
            beautiful and functional web interfaces. I enjoy solving
            challenging problems and turning ideas into reality.
          </p>
        </div>
        <div>
          <img src={aboutpic} alt="About" className="about-pic" />
        </div>
      </div>
    </section>
  );
};

export default About;
