import React from 'react'
import logo from '../assets/logo-no-background.png'
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown.js'
import { Link } from 'react-router';
import { CartState } from '../context/Context';


const Navigation = () => {
  
  const {
    state: { cart },
    dispatch
  } = CartState();

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

        {/* Dropdown shoppingcart */}
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
            <i className="fa-solid fa-cart-shopping"></i>
            
            {cart.length > 0 ? (
              <span className="badge text-bg-success ms-1">{cart.length}</span>
            ) : (<></>)}

            <p className='d-inline ms-3 me-1'>Varukorg</p>
          </button>
          <ul className="dropdown-menu dropdown-menu-end p-3" role='menu'>
      
            {cart.length > 0 ? (
              <>
                {cart.map((product) => (
                  <li key={product._id}>
                    <span className="item d-flex justify-content-between align-items-center">
                      <span className="d-flex align-items-center">
                          <img src={product.images[0]} className='me-2 cart-image' alt={product.name}/>
                          <span className="item-info">
                              <span>{product.name}</span>
                              <span className='d-block'>Pris: {product.price} kr</span>
                          </span>
                      </span>
                      <button 
                        className="btn btn-danger"
                        onClick={() => 
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product
                          })
                        }>
                        <i className="fa-regular fa-trash-can"></i>
                      </button>   
                    </span>
                  </li>
              ))}
              <li><hr className="dropdown-divider" /></li>
              <li>
                <Link to="/checkout">
                  <button className='btn btn-primary w-100'>Kassa</button>
                </Link>
                <Link to="/cart">
                  <button className='btn btn-outline-secondary w-100 mt-2'>Varukorg</button>
                </Link>
              </li>
              </>

              ) : (<span className='dropdown-item'>Varukorgen är tom!</span>
          
            )}
              
          </ul>
        </div>
        {/* End of dropdown shoppingcart */}
      </nav>

    </div>
  )
}

export default Navigation

