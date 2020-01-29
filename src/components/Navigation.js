import React, {Component} from 'react';
import {Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarBrand} from 'reactstrap';

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
                    <NavbarBrand href="/home">Vishal Chand</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/cv">CV</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/blog">Blog</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </div>
                </Navbar>
          );    
    }
}