import React from "react";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Figma"];

  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, i) => (
          <li className="skill-badge" key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}