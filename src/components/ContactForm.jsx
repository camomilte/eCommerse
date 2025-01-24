import React from 'react'

const ContactForm = () => {
  return (
    <div id="contact" className="contact-area">
        <div className="container my-5">										
            <div className="section-title text-center">
                <h1 className='mb-3'>Kontakta oss</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.</p>
            </div>					
            <div className="row">
                <div className="col-lg-7">	
                    <div className="contact">
                        <form className="contact-form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <input type="text" name="name" className="p-3 w-100" placeholder="Namn" required="required"></input>
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" name="email" className="p-3 w-100" placeholder="Mejladress" required="required"></input>
                                </div>
                                <div className="form-group col-md-12">
                                    <textarea rows="6" name="message" className="p-3 w-100" placeholder="Ditt meddelande" required="required"></textarea>
                                </div>
                                <div className="col-md-12 text-center d-flex flex-column">
                                    <button type="submit" value="Send message" name="submit" id="submitButton" className="btn btn-primary py-3" title="Submit Your Message!">Skicka meddelande</button>
                                </div>
                            </div>
                        </form>
                    </div>
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

export default ContactForm
