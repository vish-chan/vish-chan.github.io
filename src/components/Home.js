import React from 'react';
import {Link} from 'react-router-dom';
import { INFO } from '../data/constants';
import {Alert} from 'reactstrap';

export default function HomeComponent(props) {

    return(
        <div className="container" style={{marginTop:50, marginBottom:100}}>
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
                            {INFO}
                        </div>
                        <div className="col-12 top-buffer">
                            <Alert color="success" style={{fontSize:25}}><i className="fa fa-bullhorn fa-lg"/>  Play my latest game <a href="http://vishalchand.com/Roshambo-Town/">Roshambo Town</a>.</Alert>
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
