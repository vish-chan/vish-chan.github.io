import React from 'react';
import { PROJECTS } from '../data/projects';
import { EXPERIENCE, EDUCATION } from '../data/experience';



function Experience(props) {
    return(
        <div className="row experienceRow">
            <div className="col-12">
                <h4>{props.self.company}</h4>
            </div>
            <div className="col-12">
                <h6>{props.self.designation} | {props.self.duration}</h6>
            </div>
            <div className="col-12">
                <p>{props.self.desc}</p>
            </div>
        </div>
    )
}

function ExperienceUI(props) {

    const experienceUI = EXPERIENCE.map(exp => <Experience self={exp} key={exp.id}/>); 

    return(
        <div id="experience" className="row" style={{borderBottom: "1px solid grey", marginBottom:'20px'}}>
            <div className="col-12 col-md-4">
                <div className="circleCV experience">Work Experience</div>
            </div>
            <div className="col-12 col-md-8">
                {experienceUI}
            </div>
        </div>
    )
    
}

function Education(props) {
    return(
        <div className="row experienceRow">
            <div className="col-12">
                <h5>{props.self.institution}</h5>
            </div>
            <div className="col-12">
                <h6>{props.self.degree} | {props.self.duration}</h6>
            </div>
            <div className="col-12">
                <p><b>Percentage/CGPA:</b> {props.self.percentage}</p>
            </div>
        </div>
    )
}

function EducationUI(props) {
    const educationUI = EDUCATION.map(edu => <Education self={edu} key={edu.id}/>); 

    return(
        <div id="experience" className="row" style={{marginBottom:'20px'}}>
            <div className="col-12 col-md-4">
                <div className="circleCV experience">Education</div>
            </div>
            <div className="col-12 col-md-8">
                {educationUI}
            </div>
        </div>
    )
}

function CVComponent(props) {

    return(
        <ul className="container">
            <div className="row">
                <h1 className="col-12 projectHeading">Resume</h1>
            </div>
            <div className="row">
                <div className="col-12 col-md-8">
                    <ExperienceUI />
                </div>
                <div className="col-12 col-md-8">
                    <EducationUI />
                </div>
            </div>
        </ul>
    );
}

export default CVComponent;