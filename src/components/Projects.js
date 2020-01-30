import React from 'react';
import { PROJECTS } from '../data/projects';

function ProjectComponent(props) {

    const gitlink = "github" in props.self? <a className="btn btn-social-icon btn-github icon" href={props.self.github}><i className="fa fa-github"></i></a>: <div></div>;

    return(
        <div className="row projectRow">
            <div className="d-none d-md-block col-md-4 projectImgContainer">
                <div className="projectImg" style={{backgroundImage: `url("${props.self.img}")`}} />
            </div>
            <div className="col-12 col-md-8">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.self.title}</h4>
                    </div>
                    <div className="col-12">
                        <h6>{props.self.subtitle}</h6>
                    </div>
                    <div className="col-12">
                        <p>{props.self.desc}</p>
                    </div>
                    <div className="col-12">
                        {gitlink}
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProjectsComponent(props) {
    const projectsUI = PROJECTS.map(project => <ProjectComponent self={project} key={project.id}/>); 

    return(
        <ul className="container">
            <div className="row">
                <h1 className="col-12 projectHeading">Selected Projects</h1>
            </div>
            {projectsUI}
        </ul>
    );
}

export default ProjectsComponent;