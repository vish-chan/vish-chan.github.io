import React, {Component} from 'react';
import NavigationBar from './Navigation';
import HomeComponent from './Home';
import CVComponent from './CV';
import {Switch, Route, Redirect} from 'react-router-dom'; 



export default class Main extends Component {
    
    render() {
        return(
            <div>
                <NavigationBar />
                <Switch>
                    <Route path="/home" component={HomeComponent} />
                    <Route path="/cv" component={CVComponent} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
        
    }
}