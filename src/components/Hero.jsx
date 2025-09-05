import React from "react";

const Hero = () => (
  <section className="hero">
    <h1>👋 Hi, I’m Munaza</h1>
    <p>A passionate frontend developer building modern and responsive apps.</p>
    <button onClick={() => window.location.href = "#projects"}>
      View My Projects
    </button>
  </section>
);

export default Hero;
