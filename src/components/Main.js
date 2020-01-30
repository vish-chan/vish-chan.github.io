import React, {Component} from 'react';
import NavigationBar from './Navigation';
import HomeComponent from './Home';
import CVComponent from './CV';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'; 
import Footer from './Footer';
import ProjectsComponent from './Projects';
import {TransitionGroup, CSSTransition} from 'react-transition-group';



class Main extends Component {

    render() {
        return(
            <div>
                <NavigationBar />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={400}>
                        <Switch>
                            <Route exact path="/home" component={HomeComponent} />
                            <Route exact path="/cv" component={CVComponent} />
                            <Route exact path="/projects" component={ProjectsComponent} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                
                <Footer />
            </div>
        )
        
    }
}

export default withRouter(Main);