import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div id="contact" className="contact-area">
        <div className="container my-5">										
            <div className="section-title text-center">
                <h1 className='mb-3'>Kontakta oss</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.</p>
            </div>					
            <div className="row">
                <div className="col-lg-7">	
                    <ContactForm />
                </div>
                <div className="col-lg-5">
                    <div className="contact-icon d-flex align-items-center gap-4 my-3">
                        <i className="fa fa-map-marker text-white d-flex justify-content-center align-items-center h4 ms-3"></i>
                        <div>
                            <h5>Hitta hit</h5>
                            <p>Gatuadress 1, 234 56 Stockholm</p>
                        </div>
                    </div>
                    <div className="contact-icon d-flex align-items-center gap-4 my-3">
                        <i className="fa fa-envelope text-white d-flex justify-content-center align-items-center h4 ms-3"></i>
                        <div>
                            <h5>Mejla oss</h5>
                            <p>Info@exempel.se</p>
                        </div>
                    </div>
                    <div className="contact-icon d-flex align-items-center gap-4 my-3">
                        <i className="fa fa-phone text-white d-flex justify-content-center align-items-center h4 ms-3"></i>
                        <div>
                            <h5>Ring oss</h5>
                            <p>08-123 456 78</p>
                        </div>
                    </div>
                    <div className="contact-icon d-flex align-items-center gap-4 my-3">
                        <i className="fa fa-clock-o text-white d-flex justify-content-center align-items-center h4 ms-3"></i>
                        <div>
                            <h5>Bemanningstider</h5>
                            <p>Mån - Fre: 08:00 - 16:00</p>
                        </div>
                    </div>					
                </div> 
            </div>
        </div>	
    </div>
  )
}

export default Contact
