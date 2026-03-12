import React from 'react';
import { EXPERIENCE, EDUCATION, COURSES, LANGUAGES, AOI } from '../data/experience';

function TimelineItem({item, isExperience}) {
    return(
        <div className="timeline-item">
            <h4>{isExperience ? item.company : item.institution}</h4>
            <h6>
                {isExperience ? `${item.designation} · ${item.duration}` : `${item.degree} · ${item.duration}`}
            </h6>
            <p>{isExperience ? item.desc : <><b>CGPA/Percentage:</b> {item.percentage}</>}</p>
        </div>
    )
}

export default function CVComponent() {
    return(
        <div className="container">
            <div className="section-header">
                <h1>
                    <span className="prompt">❯ </span>cat resume.md
                    <a className="cv-download" href="assets/cv.pdf" title="Download PDF" style={{marginLeft: 16}}>
                        <i className="fa fa-download"/> .pdf
                    </a>
                </h1>
            </div>
            <div className="row">
                <div className="col-12 col-lg-8">
                    <h5 style={{color:'#58a6ff', marginBottom: 20}}>
                        <span className="comment">// </span>Work Experience
                    </h5>
                    {EXPERIENCE.map(exp =>
                        <TimelineItem item={exp} key={exp.id} isExperience/>
                    )}

                    <h5 style={{color:'#58a6ff', margin: '32px 0 20px'}}>
                        <span className="comment">// </span>Education
                    </h5>
                    {EDUCATION.map(edu =>
                        <TimelineItem item={edu} key={edu.id}/>
                    )}
                </div>
                <div className="col-12 col-lg-4">
                    <div className="cv-sidebar-section">
                        <h5>Languages</h5>
                        <ul>
                            {LANGUAGES.map(l => <li key={l}>{l}</li>)}
                        </ul>
                    </div>
                    <div className="cv-sidebar-section">
                        <h5>Interests</h5>
                        <ul>
                            {AOI.map(a => <li key={a}>{a}</li>)}
                        </ul>
                    </div>
                    <div className="cv-sidebar-section">
                        <h5>Coursework</h5>
                        <p className="cv-sidebar-label">Graduate</p>
                        <p className="cv-sidebar-value">{COURSES.graduate}</p>
                        <p className="cv-sidebar-label">Undergraduate</p>
                        <p className="cv-sidebar-value">{COURSES.undergraduate}</p>
                        <p className="cv-sidebar-label">Independent</p>
                        <p className="cv-sidebar-value">{COURSES.independent}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
