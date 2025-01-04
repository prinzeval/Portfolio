import React from 'react';
import './experience.css';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  const frontendSkills = [
    { skill: 'HTML', level: 'Experienced', isBold: true },
    { skill: 'CSS', level: 'Experienced', isBold: true },
    { skill: 'SASS', level: 'Intermediate', isBold: true },
    { skill: 'JavaScript', level: 'Basic', isBold: true },
    { skill: 'TypeScript', level: 'Basic', isBold: true },
    { skill: 'Material UI', level: 'Intermediate', isBold: true },
  ];

  const backendSkills = [
    { skill: 'PostgreSQL', level: 'Basic', isBold: true },
    { skill: 'Node JS', level: 'Intermediate', isBold: true },
    { skill: 'Express JS', level: 'Intermediate', isBold: true },
    { skill: 'Git', level: 'Intermediate', isBold: true },
  ];

  const otherSkills = [
    { skill: 'Docker', level: 'Basic', isBold: true },
    { skill: 'AWS', level: 'Intermediate', isBold: true },
    { skill: 'Agile Methodologies', level: 'Experienced', isBold: true },
    { skill: 'UX/UI Design', level: 'Intermediate', isBold: true },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="title">Experience</h2>
      <div className="experience-details-container">
        <article className="experience-category">
          <h3>Frontend Development</h3>
          <ul>
            {frontendSkills.map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </ul>
        </article>
        <article className="experience-category">
          <h3>Backend Development</h3>
          <ul>
            {backendSkills.map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </ul>
        </article>
        <article className="experience-category">
          <h3>Other Skills</h3>
          <ul>
            {otherSkills.map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
