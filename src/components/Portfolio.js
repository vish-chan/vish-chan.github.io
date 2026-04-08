import React from 'react';
import { EXPERIENCE, EDUCATION, SKILLS } from '../data/experience';
import { PROJECTS } from '../data/projects';

const ASCII_BANNER = [
  ' __     ___     _           _    ____ _                     _ ',
  ' \\ \\   / (_)___| |__   __ _| |  / ___| |__   __ _ _ __   __| |',
  '  \\ \\ / /| / __| \'_ \\ / _` | | | |   | \'_ \\ / _` | \'_ \\ / _` |',
  '   \\ V / | \\__ \\ | | | (_| | | | |___| | | | (_| | | | | (_| |',
  '    \\_/  |_|___/_| |_|\\__,_|_|  \\____|_| |_|\\__,_|_| |_|\\__,_|',
  '',
  '  role   ~ Senior SDE @ Amazon \u2014 Languages & Runtime',
  '  focus  ~ JVM internals \u00b7 performance engineering',
  '  edu    ~ IIT Roorkee CS \u2014 B.Tech + M.Tech, 2015',
  '  bg     ~ OpenJDK contributor \u00b7 systems \u00b7 distributed computing',
].join('\n');

function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="container">
                <div className="terminal">
                    <div className="terminal-header">
                        <span className="terminal-title">vishal@dev:~</span>
                    </div>
                    <div className="terminal-body">
                        <p className="hero-prompt">
                            <span className="prompt">$ </span>
                            <span className="command">whoami</span>
                            <span className="cursor"/>
                        </p>
                        <pre className="ascii-art">{ASCII_BANNER}</pre>
                        <div className="hero-links">
                            <a className="inline-link" href="assets/cv.pdf" target="_blank" rel="noopener noreferrer"><i className="fa fa-file-text-o"/> resume</a>
                            <a className="inline-link" href="https://github.com/vish-chan" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"/> github</a>
                            <a className="inline-link" href="https://www.linkedin.com/in/vishal-chand" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"/> linkedin</a>
                            <a className="inline-link" href="mailto:vishalchandcv@gmail.com"><i className="fa fa-envelope"/> email</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title"><span className="prompt">&#10095; </span>skills</h2>
                <div className="terminal">
                    <div className="terminal-header">
                        <span className="terminal-title">~/.skills</span>
                    </div>
                    <div className="terminal-body">
                        {Object.entries(SKILLS).map(([label, items]) =>
                            <div className="skill-row" key={label}>
                                <span className="skill-label">{label}</span>
                                <div className="tech-tags">
                                    {items.map(s => <span key={s} className="tech-tag">{s}</span>)}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({project}) {
    return (
        <div className="terminal project-card">
            <div className="terminal-header">
                <span className="terminal-title">{project.subtitle}</span>
            </div>
            <div className="terminal-body">
                <div className="project-title-row">
                    <h3 className="project-title">{project.title}</h3>
                    {project.github &&
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-link"><i className="fa fa-github"/></a>
                    }
                    {project.link &&
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-icon-link"><i className="fa fa-external-link"/></a>
                    }
                </div>
                {project.tech &&
                    <div className="tech-tags">
                        {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                }
                <p className="project-desc">{project.desc}</p>
            </div>
        </div>
    );
}

function FeaturedProjects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title"><span className="prompt">&#10095; </span>projects</h2>
                <div className="projects-grid">
                    {PROJECTS.map(p => <ProjectCard project={p} key={p.id}/>)}
                </div>
            </div>
        </section>
    );
}

function ExperienceTimeline() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title"><span className="prompt">&#10095; </span>experience</h2>
                <div className="exp-grid">
                    <div className="terminal">
                        <div className="terminal-header">
                            <span className="terminal-title">work</span>
                        </div>
                        <div className="terminal-body">
                            {EXPERIENCE.map(exp =>
                                <div className="timeline-item" key={exp.id}>
                                    <h4>{exp.company}</h4>
                                    <h6>{exp.designation} &middot; <span className="duration">{exp.duration}</span> &middot; {exp.location}</h6>
                                    <p>{exp.desc}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="terminal">
                        <div className="terminal-header">
                            <span className="terminal-title">education</span>
                        </div>
                        <div className="terminal-body">
                            {EDUCATION.map(edu =>
                                <div className="timeline-item" key={edu.id}>
                                    <h4>{edu.institution}</h4>
                                    <h6>{edu.degree} &middot; <span className="duration">{edu.duration}</span></h6>
                                    <p>CGPA/Percentage: {edu.percentage}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <span className="comment">// &copy; {new Date().getFullYear()} Vishal Chand</span>
            </div>
        </footer>
    );
}

export default function Portfolio() {
    return (
        <div>
            <Hero />
            <Skills />
            <ExperienceTimeline />
            <FeaturedProjects />
            <Footer />
        </div>
    );
}
