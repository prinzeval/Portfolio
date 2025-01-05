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
    { skill: 'AWS (Lambda)', level: 'Intermediate', isBold: true },
    { skill: 'S3,API Gateway ', level: 'Intermediate', isBold: true },
    { skill: 'Selenium', level: 'Experienced', isBold: true },
  ];

  const certifications = [
    { skill: 'Python for Data Science, AI & Development (Coursera)', level: 'Proficient in Python libraries like Pandas and NumPy, skilled in data scraping using APIs and BeautifulSoup.', isBold: false },
    { skill: 'Introduction to Data Engineering (Coursera)', level: 'Knowledgeable in ETL processes, relational databases, and big data engines.', isBold: false },
  ];

  const professionalExperience = [
    {
      title: 'Data Analyst Intern',
      company: 'LEGACY INC, Remote',
      date: 'Sep 2023 – Dec 2023',
      description: 'Designed and implemented scalable data pipelines for efficient ingestion and processing. Collected and prepared data from diverse sources, ensuring quality and integrity. Explored web scraping and mining techniques to create foundational ETL processes for diverse datasets.',
    },
    {
      title: 'Software Engineer Intern',
      company: 'CMND.ai, Cyprus (Hybrid)',
      date: 'Jun 2024 – Aug 2024',
      description: 'Developed Python and JavaScript applications as part of an agile team, contributing to scalable and robust software solutions. Built and optimized APIs using FastAPI and React.js, resulting in improved system efficiency and enhanced user experience. Designed and implemented REST APIs, integrating them seamlessly into AI-powered tools to enhance functionality and performance.',
    },
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
        <article className="experience-category">
          <h3>Certifications & Courses</h3>
          <ul>
            {certifications.map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </ul>
        </article>
        <article className="experience-category book">
          <h3>Data Analyst Intern</h3>
          <p><b>Company:</b> LEGACY INC, Remote</p>
          <p><b>Date:</b> Sep 2023 – Dec 2023</p>
          <p>{professionalExperience[0].description}</p>
        </article>
        <article className="experience-category book">
          <h3>Software Engineer Intern</h3>
          <p><b>Company:</b> CMND.ai, Cyprus (Hybrid)</p>
          <p><b>Date:</b> Jun 2024 – Aug 2024</p>
          <p>{professionalExperience[1].description}</p>
        </article>
      </div>
    </section>
  );
};

export default Experience;
