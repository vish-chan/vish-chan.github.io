import React from 'react';

export default function Blog() {
    return (
        <section className="section" style={{minHeight: 'calc(100vh - 52px)'}}>
            <div className="container">
                <h2 className="section-title"><span className="prompt">&#10095; </span>blog</h2>
                <div className="terminal">
                    <div className="terminal-header">
                        <span className="terminal-title">~/blog</span>
                    </div>
                    <div className="terminal-body">
                        <p>
                            <span className="prompt">$ </span>
                            <span className="command">cat latest_posts.md</span>
                        </p>
                        <p className="comment">// Coming soon — posts about performance engineering, systems, and dev life.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
