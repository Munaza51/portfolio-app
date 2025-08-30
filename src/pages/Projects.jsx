import React from 'react'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <p>Here are some projects I have built:</p>
    <div className="container">
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} project={proj} />
      ))}
    </div>
  </section>
)

export default Projects
