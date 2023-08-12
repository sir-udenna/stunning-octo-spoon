import React from 'react';
import data from '../data';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-info">
          <p>Email: {data.about.email}</p>
          <p>Phone: {data.about.phone}</p>
          <p><a href={data.about.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p><a href={data.about.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
