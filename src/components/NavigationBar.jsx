import { Container, Nav, Navbar } from "react-bootstrap";
import React from 'react'
import { LinkContainer } from "react-router-bootstrap";

export function NavigationBar(){
    return(
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Student Webpage</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <LinkContainer to = '/'>
                <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to = '/contact'>
                <Nav.Link>ContactUs</Nav.Link>
                </LinkContainer>
                <LinkContainer to = '/form'>
                <Nav.Link>Registration Form</Nav.Link>
                </LinkContainer>
                <LinkContainer to = '/client-list'>
                <Nav.Link>Client List</Nav.Link>
                </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}