import React from 'react';

const ExperienceItem = ({ skill, level, isBold }) => {
  return (
    <li>
      <span className="checkmark">✔</span>
      {isBold ? <b>{skill}</b> : skill} - {level}
    </li>
  );
};

export default ExperienceItem;
