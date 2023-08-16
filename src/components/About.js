import React from 'react';
import './About.css';
import profileImage from '../assets/1684302133934.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={profileImage} alt="Udenna Nebeolisa" />
          </div>
          <div className="about-text">
            <h3>My Journey</h3>
            <p>My coding journey took root in the creative landscapes of Roblox, where lines of code came together to craft immersive experiences. This early spark fueled my commitment to become a software engineer. Through a transformative 15-week immersive course at Flatiron School, I honed my skills and took a giant leap into the world of full-stack development.</p>
            <h3>Passion and Innovation</h3>
            <p>Passion drives me, and innovation fuels me. With a relentless pursuit of continuous improvement, I seek to push the boundaries of what's possible. I believe in the power of code to shape the future and contribute to organizational objectives.</p>
            <h3>Beyond the Keyboard</h3>
            <p>When I'm not crafting code, I'm an explorer at heart. You might catch me cruising on my skateboard, exploring nature, diving into a good book, or jamming to music that resonates with the rhythm of creativity.</p>
            <h3>Let's Create Together</h3>
            <p>Collaboration is where magic happens. I'm enthusiastic about connecting with fellow innovators, creators, and problem solvers. Let's connect and explore how we can collaborate to bring meaningful solutions to life.</p>
            <p className="connect-links">
              <a href="https://www.linkedin.com/in/udenna/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/sir-udenna" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
