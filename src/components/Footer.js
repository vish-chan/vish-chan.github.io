import React from 'react';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row d-flex justify-content-center">             
                    <div className="col-12 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-github icon" href="https://github.com/vish-chan"><i className="fa fa-github"></i></a>
                            <a className="btn btn-social-icon btn-linkedin icon" href="https://www.linkedin.com/in/vishal-chand"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-google icon" href="mailto:vishal02041992@gmail.com"><i className="fa fa-google"></i></a>
                            <a className="btn btn-social-icon btn-facebook icon" href="https://facebook.com/venom0204"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-instagram icon" href="https://www.instagram.com/rookiepixels"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto" style={{fontSize:15}}>
                        <p>© Copyright 2020 by Vishal Chand.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;