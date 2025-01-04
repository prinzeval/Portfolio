import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-info-container">
        <p>Get in Touch</p>
        <h1>Contact Me</h1>
      </div>
      <div className="btn-container">
        <div className="contact-button">
          <span className="icon">📧</span>
          <span>Example@gmail.com</span>
          <span className="icon">🔗</span>
          <span>LinkedIn</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
