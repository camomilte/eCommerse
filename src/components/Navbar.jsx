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
      <Navbar className="bg-white">
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
          <Nav className="justify-content-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Button href='/login'>Log in</Button>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation

