import React from 'react'

/* Import components from react-bootstrap */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import logo from '../assets/icon.svg'


const Navigation = () => {
  return (
    <>
      <Navbar expand="md" className="bg-white">
        <Container>
        <Navbar.Brand href="#home">
            <img
              src={logo}
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
            The Bit Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Button href="/login" className="ms-lg-2 mt-2 mt-lg-0">Log in</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation

