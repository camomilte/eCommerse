import React from 'react'
import { Link } from 'react-router'

const OrderSuccess = () => {
  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center px-2">
        <div className='text-center'>
            <h1 className="display-3 text-primary fw-semibold">Tack för din order!</h1>
            <p className="lead">Vi har tagit emot din beställning! Kolla din mejl för att se orderdetaljer och följa din beställning.</p>
            <hr />
            <p>
                Är något oklart? <Link to="/contact">Kontakta oss</Link>
            </p>
            <Link to="/">
                <button className="btn btn-primary rounded-pill px-5 py-3 mt-4">Tillbaka till startsidan</button>
            </Link>
        </div>
    </div>
  )
}

export default OrderSuccess
