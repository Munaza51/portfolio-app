import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams(); // get project id from route
    const project = projects.find((proj) => proj.id === parseInt(id));

    if (!project) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Project Not Found</h2>
                <Link to="/projects">Back to Projects</Link>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '800px', margin: '50px auto', padding: '0 20px' }}>
            <h1>{project.title}</h1>
            <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }}
            />
            <p>{project.description}</p>
            <h3>Technologies Used:</h3>
            <ul>
                {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'inline-block',
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#ED7D9F',
                    color: '#fff',
                    borderRadius: '5px',
                    textDecoration: 'none'
                }}
            >
                Visit Project
            </a>
            <div style={{ marginTop: '30px' }}>
                <Link to="/projects">&larr; Back to Projects</Link>
            </div>
        </div>
    );
};

export default ProjectDetail;
