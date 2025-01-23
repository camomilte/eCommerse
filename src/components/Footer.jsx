import React from 'react';

import logo from '../assets/icon.svg'

const Footer = () => {
  return (
    <div className="footer py-5 bg-dark">
      <div className="container">		
        <div className="row text-center text-white">						
          <div className="col-lg-12 col-sm-12 col-xs-12">					
            <div className="footer-brand mb-4 d-flex justify-content-center">
              <img
                src={logo}
                height="30"
                alt="logo"
                className="d-inline-block"
              />
              <h5 className='d-inline-block pe-4 my-auto'>The Bit Store</h5>
            </div>	
            <div className="footer_profile">
              <ul className='d-flex gap-2 justify-content-center'>
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
              </ul>
            </div>						
          </div>					
        </div>					
      </div>
    </div>
  )
}

export default Footer
