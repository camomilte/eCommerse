import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context';
import { Link } from 'react-router';

const Cart = () => {
    // Extract the cart state and dispatch function from the CartState context
    const {
        state: { cart },
        dispatch
    } = CartState();

    // State to store the total price of products in the cart
    const [total, setTotal] = useState();
    
    // Calculate the total whenever the cart state changes
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    }, [cart])
    
    return (
    
    <div className="container my-4">
        <h1 className='text-center mb-3'>Varukorg</h1>
        <div className="mx-2 mx-lg-auto max-width-custom">

            <div className="d-flex justify-content-between border-bottom pb-2">
                <h4><b>Innehåll</b></h4>
                
                {/* Switch between singular or plural form depending on number of items in cart */}
                {cart.length > 1 ? (
                    <div className="text-muted">{cart.length} varor</div>
                ) : ( <div className="text-muted">{cart.length} vara</div>
                )}
            </div>
              
        
            {/* Listing products in cart */}
           {cart.length > 0 ? (
            <>
                {/* Map through products in cart and display if cart is NOT empty */}
                {cart.map((product) => (
                    <div className="border-bottom py-4" key={product._id}>
                        <div className="row d-flex main align-items-center justify-content-between flex-wrap">
                            <div className="col-3">
                                <img className="img-fluid" src={product.images[0]} alt={product.name}/>
                            </div>
                            <div className='col-5 row d-flex flex-column flex-sm-row justify-content-md-between'>
                                <div className="mb-only-sm col">
                                    <div className="row text-muted">{product.category}</div>
                                    <div className="row">{product.name}</div>
                                </div>
                                <div className='col px-0'>
                                    <p className=' text-sm-end'>{product.price} kr</p>
                                </div>
                            </div>
    
                            <div className="col-auto">
                                {/* Remove product from cart */}
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
                            </div>
                        </div>
                    </div>
                ))}
            </>

            ) : ( 
            /* If cart is empty */
            <div className='border-bottom py-5'>
                <p className='text-center pt-3 text-muted'> Din varukorg är tom!</p>
            </div>)}
            
            {/* Order total */}
            <div className="summary">
                <div className="d-flex justify-content-between mt-4">
                    <h5><b>Totalsumma:</b></h5>
                    <div>{total} kr</div>
                </div>
            </div>

            {/* Buttons to continue shopping or proceed to checkout */}
            <div className="d-flex gap-2 mt-4">
                <Link to="/checkout" className='w-100'>
                    <button className='btn btn-primary w-100 py-3'>Till kassan</button>
                </Link>
                <Link to="/shop" className='w-100'>
                    <button className='btn btn-outline-primary w-100 py-3'>Fortsätt shoppa</button>
                </Link>
            </div> 
        </div>
        
    </div>
  )
}

export default Cart
