import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


const Navigation = () => {
    return(
        <Navbar fixed="bottom" bg="light" expand="sm">
            <Navbar.Brand className="navbar-brand" href="#"><img src="/st_jude_logo.png" height="100px" width="100px" alt="Company of Saint Jude logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/roster">Roster</NavLink>
                    <NavLink className="nav-link" to="/activities">Activities</NavLink>
                    <NavLink className="nav-link" to="/links">Links</NavLink>
                    <NavLink className="nav-link" to="/files">Files</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
