import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

import logo from '../assets/icon.svg'

const Footer = () => {
  return (
    <>
    <Navbar className="bg-dark p-4">
      <Container>
        <Navbar.Brand href="#home" className='text-light'>
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />The Bit Store</Navbar.Brand>

        <Nav className="align-right">
            <Nav.Link href="https://www.instagram.com/" alt="Instagram">
              <i className="fa-brands fa-instagram text-white"></i>    
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/" alt="Facebook">
              <i className="fa-brands fa-facebook text-white"></i>
            </Nav.Link>
            <Nav.Link href="https://www.youtube.com" alt="Youtube">
              <i className="fa-brands fa-youtube text-white"></i>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com" alt="Linkedin">
              <i className="fa-brands fa-linkedin text-white"></i>
            </Nav.Link>
            <Nav.Link href="https://ww.tiktok.com" alt="Tiktok">
              <i className="fa-brands fa-tiktok text-white"></i>
            </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Footer
