import React from 'react'

function ErrorPage() {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center min-vh-100 px-2">
        <div className="text-center">
            <h1 className="display-1 fw-bold text-primary">404</h1>
            <p className="fs-2 fw-medium mx-4">Oops! Något gick fel! Försök igen.</p>
            <a href="/" className="btn btn-primary fw-semibold rounded-pill px-4 py-2 mt-4">
                Tillbaka till startsidan
            </a>
        </div>
      </div>
    </div>

  )
}

export default ErrorPage
