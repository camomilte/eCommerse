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
            <Nav className='me-auto'>
              <Nav.Link href="/">Startsida</Nav.Link>
              <Nav.Link href="/shop">Butik</Nav.Link>
              <Nav.Link href="/contact">Kontakta oss</Nav.Link>
            </Nav>
            <Button href="/login">Logga in</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation

