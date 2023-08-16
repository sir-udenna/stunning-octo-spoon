import React from 'react';
import data from '../data';
import { FaEnvelope, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import './Footer.css'

const emailSubject = encodeURIComponent('Job Inquiry from Portfolio');

const Footer = () => {
  return (
    <div className="footer-contact-info">
      <a href={`mailto:${data.about.email}?subject=${emailSubject}`} className="footer-contact-link">
        <FaEnvelope />
      </a>
      <a href={data.about.linkedin} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
        <FaLinkedin />
      </a>
      <a href={data.about.github} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
        <FaGithub />
      </a>
      <a href={data.about.medium} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
        <FaMedium />
      </a>
    </div>
  );
}

export default Footer;
