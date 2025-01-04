import React, { useState } from 'react';
import './navbar.css';
const Navbar = () => {

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Valentine </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
