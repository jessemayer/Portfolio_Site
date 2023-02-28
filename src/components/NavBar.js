import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {  faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import { faCode } from '@fortawesome/free-solid-svg-icons';




const NavBar = () => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> <img
            src="/Jesse Mayer -yellow.png" 
            width=""
            height="70px"
            className="d-inline-block align-top"
            alt=''
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Resume</Nav.Link>
            <Nav.Link>About Me</Nav.Link>
            <Nav.Link>Skills</Nav.Link>
            <NavDropdown title={<FontAwesomeIcon icon={faCode}></FontAwesomeIcon>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">React.js Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Next.Js Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Montana Code School / Promino Tech Assignments</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link href="https://www.linkedin.com/in/jesse-mayer/" target={'_blank'} rel={'noopener noreferrer'}>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link  href="https://github.com/jessemayer" target={'_blank'} rel={'noopener noreferrer'}>
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link href='https://twitter.com/jessemayerstl' target={'_blank'} rel={'noopener noreferrer'}>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    


          
  </>
  )
}

export default NavBar
