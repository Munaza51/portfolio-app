import React from 'react';

const About = () => (
  <section id="about" className="about">
    <div className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
        Hi, I’m <strong>Munaza Hazrati</strong>, a passionate Full-Stack Developer originally 
        from Afghanistan and currently based in Pakistan.
      </p>
      <p>
        I graduated from the <strong>Fundamentals of Full-Stack Engineering Career Path</strong> at Codecademy, a program offered by Tech Transition with financial support from the World Bank.
      </p>
      <p>
        In 2025, I expanded my journey by joining the <strong>CodeWeekend Bootcamp</strong>, 
        sharpening my skills in React, Node.js, databases, and modern web development.
      </p>
      <p>
        My philosophy is simple: <em>Coding Forever,</em> keep learning, keep building.
      </p>
      
        <p className="career-goal">
          💡 Career Goal: I’m actively seeking opportunities in <strong>Frontend & Full-Stack Development</strong>, 
          including internships, collaborations, and freelance projects.
        </p>
      </div>

      <div className="about-image">
        <img 
          src="https://i.pinimg.com/736x/a1/ac/1d/a1ac1d3ac72d0f44571def710b1b4621.jpg" 
          alt="Munaza Hazrati"
        />
      </div>
    </div>
  </section>
);

export default About;
