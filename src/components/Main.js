import React, {Component} from 'react';
import NavigationBar from './Navigation';
import HomeComponent from './Home';
import CVComponent from './CV';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'; 
import Footer from './Footer';
import ProjectsComponent from './Projects';



class Main extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div>
                <NavigationBar />
                <Switch>
                    <Route exact path="/home" component={HomeComponent} />
                    <Route exact path="/cv" component={CVComponent} />
                    <Route exact path="/projects" component={ProjectsComponent} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
        
    }
}

export default withRouter(Main);