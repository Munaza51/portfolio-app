import React from 'react'

const ProjectCard = ({ project }) => (
  <div className="project">
    <img className="project-image" src={project.image} alt={project.name} />
    <div className="project-info">
      <h3>{project.name}</h3>
      <ul>
        {project.details.map((d, i) => <li key={i}>{d}</li>)}
      </ul>
      <button><a href={project.link} target="_blank">{`Visit ${project.name}`}</a></button>
    </div>
  </div>
)

export default ProjectCard
