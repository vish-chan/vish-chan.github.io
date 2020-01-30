import React, {Component} from 'react';
import {Navbar, NavbarToggler, Collapse, Nav, NavItem, NavbarBrand} from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }


    render() {
        return (
                <Navbar color='dark' dark expand="md">
                    <div  className="container">
                        <div className="row"><NavbarBrand style={{fontSize:30}} href="/">Vishal Chand</NavbarBrand></div>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'><i className="fa fa-home" aria-hidden="true"></i> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/cv"><i className="fa fa-file-text" aria-hidden="true"/> Resume</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/projects"><i className="fa fa-code" aria-hidden="true"/> Projects</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/blog"><i className="fa fa-wordpress" aria-hidden="true"/> Blog</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Roshambo-Town">Roshambo Town</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        </div>
                    </Navbar>
          );    
    }
}