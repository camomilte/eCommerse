import React from 'react'
import logo from '../assets/logo-no-background.png'
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown.js'
import { Link } from 'react-router';


const Navigation = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-md navbar-light bg-white">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              height="30"
              className="d-inline-block align-top me-1"
              alt="logo"
              />
              The Bit Store
          </Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Hem<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">Butik</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Kontakta oss</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-cart-shopping"></i>
            <p className='d-inline mx-2'>Varukorg</p>
            <span className="badge text-bg-success">3</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <span className='dropdown-item'>Varukorgen är tom!</span>
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Navigation

