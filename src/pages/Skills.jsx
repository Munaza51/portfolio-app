import React from "react";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Figma"];

  return (
    <section className="skills container">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
