import React from 'react'

const CatalogHeader = () => {
  return (
    <section className="container text-center">
      {/* Title section */}   
      <h1 className="mt-4">Våra produkter</h1>
      <p className="lead text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, iure!</p>
      
      {/* Filter buttons */}
      <div className='d-flex flex-column flex-md-row gap-2 justify-content-center'>
          <a href="#" className="btn btn-primary" disabled>Laptops</a>
          <a href="#" className="btn btn-primary">Mobiltelefoner</a>
          <a href="#" className="btn btn-primary">Dammsugare</a>
          <a href="#" className="btn btn-primary">TV</a>
      </div>
    </section>
  )
}

export default CatalogHeader
