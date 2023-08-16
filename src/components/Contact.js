import React, { useState } from 'react';
import './Contact.css';
//Contact form

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submition logic
    console.log('Form submitted:', { name, email, message });
    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <footer id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Contact;
