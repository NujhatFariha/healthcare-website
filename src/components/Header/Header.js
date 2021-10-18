import React from 'react';
import './Header.css';
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {

    return (
        <div className="">
            <Navbar style={{ backgroundColor: '#463250' }}>
                <Container>
                    <Navbar.Brand as={NavLink} className="text-white" to="/home">
                        <img width="30px" src={logo} alt="Logo" />{" "}
                        <span className="title">MediGlow</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center" >
                            <Nav.Link as={NavLink} to="/home" className="text-white">
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/services" className="text-white">
                                Services
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/about" className="text-white">
                                About
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/contact" className="text-white">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;


