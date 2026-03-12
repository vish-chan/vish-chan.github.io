import React from 'react';
import {Link} from 'react-router-dom';

const ASCII_BANNER = `
 __     ___     _           _    ____ _                     _ 
 \\ \\   / (_)___| |__   __ _| |  / ___| |__   __ _ _ __   __| |
  \\ \\ / /| / __| '_ \\ / _\` | | | |   | '_ \\ / _\` | '_ \\ / _\` |
   \\ V / | \\__ \\ | | | (_| | | | |___| | | | (_| | | | | (_| |
    \\_/  |_|___/_| |_|\\__,_|_|  \\____|_| |_|\\__,_|_| |_|\\__,_|

  Senior Software Developer @ AMD
  Java Performance · EPYC Server Processors
  IIT Roorkee CS — B.Tech + M.Tech, 2015

  "I build high-performance software."
`;

export default function HomeComponent() {
    return(
        <div className="hero-section">
            <div className="container">
                <div className="terminal">
                    <div className="terminal-header">
                        <span className="terminal-dot red"/>
                        <span className="terminal-dot yellow"/>
                        <span className="terminal-dot green"/>
                        <span className="terminal-title">vishal@amd ~ </span>
                    </div>
                    <div className="terminal-body">
                        <p>
                            <span className="prompt">&#10095; </span>
                            <span className="function">vishal</span>
                            <span className="command">.init()</span>
                            <span className="cursor"/>
                        </p>

                        <pre className="ascii-art">{ASCII_BANNER}</pre>

                        <p>
                            <span className="keyword">const </span>
                            <span className="function">skills</span>
                            <span className="command"> = [</span>
                            {["Java", "Python", "C++", "C", "JavaScript", "Shell", "React", "Linux", "Perf. Engineering", "System Design", "ML"].map((t, i, arr) =>
                                <span key={t}><span className="string">"{t}"</span>{i < arr.length - 1 && <span className="command">, </span>}</span>
                            )}
                            <span className="command">];</span>
                        </p>

                        <div className="hero-links">
                            <Link className="hero-link hero-link-primary" to="/projects">
                                <i className="fa fa-code"/> projects
                            </Link>
                            <Link className="hero-link" to="/cv">
                                <i className="fa fa-file-text"/> resume
                            </Link>
                            <a className="hero-link" href="https://github.com/vish-chan" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github"/> github
                            </a>
                            <a className="hero-link" href="https://www.linkedin.com/in/vishal-chand" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin"/> linkedin
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
