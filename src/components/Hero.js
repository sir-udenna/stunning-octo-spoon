import React from 'react';
import './Hero.css';
import Shape from './Shape';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Udenna Nebeolisa</h1>
        <p className="hero-subtitle">Full-Stack Software Engineer | Passionate about Innovation | Lifelong Learner</p>
      </div>
      <div className="shape-container">
        <Shape />
      </div>
    </section>
  );
};

export default Hero;
