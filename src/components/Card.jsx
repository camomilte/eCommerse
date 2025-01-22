import React from 'react'

function ProductCard() {
  return (
    <div className='col-lg-6 col-md-12 mb-3'>
        <div className="card p-3">
            <div className="row">
                <div className="col-12 col-md-5 responsive">
                    <img src='https://picsum.photos/500' alt='Product' className='img-fluid rounded'></img>
                </div>                     
                <div className="col-12 col-md-7 py-3 px-4 d-flex flex-column">
                    <h5 className="mb-3 mt-2">Product 1</h5>
                    <p className='text-secondary'>Laptop</p>
                                
                    <div className="d-flex mt-auto flex-column flex-md-row gap-2">
                        <button className="btn btn-primary">Add to Cart</button>
                        <button className="btn btn-outline-primary">
                            <i className="fa-regular fa-heart me-2"></i>Wishlist
                        </button>
                    </div>
                </div>                        
            </div>                                            
        </div>
    </div>
  )
}

export default ProductCard
