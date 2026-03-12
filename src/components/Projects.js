import React from 'react';
import { PROJECTS } from '../data/projects';

function ProjectCard({project}) {
    return(
        <div className="col-12 col-md-6">
            <div className="project-card">
                <div className="project-card-img" style={{backgroundImage: `url("${project.img}")`}} />
                <h3>{project.title}</h3>
                <div className="subtitle">{project.subtitle}</div>
                {project.tech &&
                    <div className="tech-tags">
                        {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                }
                <p style={{marginTop: 12}}>{project.desc}</p>
                <div className="project-card-links">
                    {project.github &&
                        <a className="project-card-link" href={project.github} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"/> Code
                        </a>
                    }
                    {project.link &&
                        <a className="project-card-link" href={project.link} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-external-link"/> Live Demo
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}

export default function ProjectsComponent() {
    return(
        <div className="container">
            <div className="section-header">
                <h1>
                    <span className="prompt">❯ </span>ls ./projects
                    <span className="comment">// selected work</span>
                </h1>
            </div>
            <div className="row">
                {PROJECTS.map(p => <ProjectCard project={p} key={p.id}/>)}
            </div>
        </div>
    );
}
