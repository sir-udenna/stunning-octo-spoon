import React from 'react';
import data from '../data';
import './Contact.css';

const Contact = () => {
  const emailSubject = encodeURIComponent('Job Inquiry from Portfolio');

  return (
    <footer id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-info">
          <p><a href={`mailto:${data.about.email}?subject=${emailSubject}`} className="contact-link">Email</a></p>
          <p><a href={data.about.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a></p>
          <p><a href={data.about.github} target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a></p>
          <p><a href={data.about.medium} target="_blank" rel="noopener noreferrer" className="contact-link">Medium</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
