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
          <MdOutgoingMail className="icon" /> <span>valentineallpowers@gmail.com</span>
        </div>
        <div className="contact-button">
          <FaLinkedin className="icon" /> <span>LinkedIn</span>
        </div>
        <div className="contact-button">
          <FaSquareGithub className="icon" /> <span>GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
