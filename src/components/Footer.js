import React from 'react';

export default function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-links">
                        <a className="footer-link" href="https://github.com/vish-chan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fa fa-github"/> github
                        </a>
                        <a className="footer-link" href="https://www.linkedin.com/in/vishal-chand" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fa fa-linkedin"/> linkedin
                        </a>
                        <a className="footer-link" href="mailto:vishal02041992@gmail.com" aria-label="Email">
                            <i className="fa fa-envelope"/> email
                        </a>
                    </div>
                    <p className="footer-copy">
                        <span className="comment">// </span>&copy; {new Date().getFullYear()} Vishal Chand
                    </p>
                </div>
            </div>
        </div>
    );
}
