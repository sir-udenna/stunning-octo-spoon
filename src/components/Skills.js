import React from 'react';
import data from '../data';
import './Skills.css';

// const familiarTech = ["React.js, Node.js, Javascript, Python"];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-list">
            {data.skills.map((skillType, index) => (
              <div key={index}>
                <h3 className="skill-type">{skillType.type}</h3>
                <ul>
                  {skillType.list.map((skill, innerIndex) => (
                    <li key={innerIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

//Grid not supproted in outer ul