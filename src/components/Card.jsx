import React from 'react'
import { Link } from 'react-router'
import { CartState } from '../context/Context'

// Extract the cart state and dispatch function from the CartState context
function ProductCard(props) {
    const {
        state: {cart},
        dispatch,
    } = CartState();
      
    return (
    <div className='col-lg-12 col-md-12 mb-3'>
        <div className="card p-3">
            <div className="row">
                {/* Display preview image of product */}
                <div className="col-12 col-md-5 responsive">
                    <img src={props.product.images[0]} alt='Product' className='img-fluid rounded'></img>
                </div>  

                {/* Display basic product information */}
                <div className="col-12 col-md-7 py-3 px-4 d-flex flex-column">
                    <Link to={`product/${props.product._id}`} className='product-link text-dark'>
                        <h5 className="mb-3 mt-2">{props.product.name}</h5>
                    </Link>
                    <p className='text-secondary'>{props.product.category}</p>
                    <h5>{props.product.price} kr</h5>
                                
                    <div className="d-flex mt-auto flex-column flex-md-row gap-2">
                        {
                            //Check if product exist in the cart
                            cart.some(p=>p._id===props.product._id)?(
                                //If product is in the cart, show a remove from cart button
                                <button 
                                    onClick={() => {
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: props.product
                                        })
                                    }}
                                    className="btn btn-danger">Ta bort från varukorg</button>
                            ) : ( 
                                //If product is not in the cart show "Add to cart" button
                                <button 
                                    onClick={() => {
                                        dispatch({
                                            type: "ADD_TO_CART",
                                            payload: props.product
                                        })
                                    }}
                                    className="btn btn-primary">Lägg i varukorg
                                </button>
                            )
                        }
                        
                        {/* Link to products detail page */}
                        <Link to={`product/${props.product._id}`}>
                            <button className="btn btn-outline-secondary">Se detaljer</button>
                        </Link>
                    </div>
                </div>                        
            </div>                                            
        </div>
    </div>
  )
}

export default ProductCard
