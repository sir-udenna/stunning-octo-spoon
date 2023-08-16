import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <>
        <ul className="navbar-links">
          <li><a href="#" className="navbar-link">Home</a></li>
          <li><a href="#about" className="navbar-link">About</a></li>
          <li><a href="#projects" className="navbar-link">Projects</a></li>
          <li><a href="#contact" className="navbar-link">Contact</a></li>
          <li><a href="https://medium.com/@udenna" className="navbar-link" target="_blank" rel="noreferrer">Blog</a></li>
        </ul>
      </>
    </nav>
  );
};

export default Navbar;
