import React from 'react';
import './contact.css';
import { MdOutgoingMail } from 'react-icons/md';
import { FaSquareGithub, FaLinkedin } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-info-container">
        <p>Get in Touch</p>
        <h1>Contact Me</h1>
      </div>
      <div className="btn-container">
        <div className="contact-button">
          <a href="mailto:valentineallpowers@gmail.com">
            <MdOutgoingMail className="icon" /> <span>---------</span>
          </a>
        </div>
        <div className="contact-button">
          <a href="https://www.linkedin.com/in/onuoha-valentine-b62447224/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" /> <span>----------</span>
          </a>
        </div>
        <div className="contact-button">
          <a href="https://github.com/prinzeval" target="_blank" rel="noopener noreferrer">
            <FaSquareGithub className="icon" /> <span>--------</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
