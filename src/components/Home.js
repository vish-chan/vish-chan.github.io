import React from 'react';
import {Link} from 'react-router-dom';

export default function HomeComponent(props) {

    return(
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center top-buffer">
                <div className="col-10 col-md-5">
                    <img style={{width:'100%'}} src="assets/dp.png" alt="Profile"/>
                </div>
                <div className="col-12 col-md-7 text-center text-md-left" style={{fontFamily:'Calibri, sans-serif', fontSize:'18px'}}>
                    <div class="row d-flex justify-content-between align-items-center ">
                        <div className="col-12">
                            <p  style={{fontSize:'50px', color:'#484848'}}> <b>Hello,</b><span style={{fontSize:'30px', color:'#484848'}}> a bit about me: </span></p>
                        </div>
                        <div className="col-12 d-flex justify-content-around">
                            <div>
                                <SmallCard className="buttonResume" text="My Resume" to="/cv"/>
                            </div>
                            <div>
                                <SmallCard className="buttonProjects" text="My Work" to="/projects"/>
                            </div>
                            <div>
                                <SmallCard className="buttonSkills" text="My Skills"to="/projects"/>
                            </div>
                        </div>
                        <div className="col-12 top-buffer">
                            I am a Software Developer, currently working at Qualcomm. 
                            I completed my dual degree (B. Tech + M. Tech) in Computer Science and Engineering from IIT Roorkee in 2015, 
                            where I developed and explored my interests in Algorithms, Data Structure, Game Developement, Distributed Computing, and System Software. 
                            I love travelling, photography, listening to music, problem solving, working out and watching animals sing.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SmallCard(props) {
    return(
       <Link className={"circle "+props.className} to={props.to}>{props.text}</Link>
    )
}
