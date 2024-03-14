import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navs.css";
import logo from "../Navs/images/OIP-removebg-preview.png";

const Navs = () => {
    return (
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img className="logo" src={logo} title="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navLink">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">about us</Nav.Link>
                <Nav.Link href="#home">explore food</Nav.Link>
                <Nav.Link href="#link">Review</Nav.Link>
                <Nav.Link href="#link">faq</Nav.Link>
                <Nav.Link id="lastnav">65264</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Navs;
