import React from 'react';
import './contact.css';
import { MdOutgoingMail } from 'react-icons/md';
import { FaSquareGithub, FaLinkedin } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-info-container">
        <p className="subtitle">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="decorative-line"></div>
      </div>
      <div className="btn-container">
        <div className="contact-box">
          <a href="mailto:valentineallpowers@gmail.com">
            <div className="icon-container">
              <MdOutgoingMail className="icon" />
            </div>
            <div className="contact-details">
              <h3>Email</h3>
              <p>valentineallpowers@gmail.com</p>
            </div>
          </a>
        </div>
        <div className="contact-box">
          <a href="https://www.linkedin.com/in/onuoha-valentine-b62447224/" target="_blank" rel="noopener noreferrer">
            <div className="icon-container">
              <FaLinkedin className="icon" />
            </div>
            <div className="contact-details">
              <h3>LinkedIn</h3>
              <p>Onuoha Valentine</p>
            </div>
          </a>
        </div>
        <div className="contact-box">
          <a href="https://github.com/prinzeval" target="_blank" rel="noopener noreferrer">
            <div className="icon-container">
              <FaSquareGithub className="icon" />
            </div>
            <div className="contact-details">
              <h3>GitHub</h3>
              <p>prinzeval</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;