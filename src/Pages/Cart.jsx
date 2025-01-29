import React from 'react'
import { CartState } from '../context/Context';

const Cart = () => {
    const {
        state: { cart },
        dispatch
    } = CartState();
    
    return (
    
    <div className="container my-4">
        <h1 className='text-center mb-3'>Varukorg</h1>
        <div className="row">
            <div className="col-md-8">

                <div className="d-flex justify-content-between border-bottom pb-2">
                    <h4><b>Innehåll</b></h4>
                    <div className="text-muted">3 varor</div>
                </div>  

                {/* Listing products in cart */}
                <div className="row border-bottom py-4">
                    <div className="row main align-items-center">
                        <div className="col-2">
                            <img className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" />
                        </div>
                        <div className="col">
                            <div className="row text-muted">Varugrupp</div>
                            <div className="row">Varans namn</div>
                        </div>
                        <div className="col">
                            <p>1000kr</p>
                        </div>

                        <div className="col">
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
            </div>
            <div className="col-md-4 summary">
                <div className="row">
                    <div className="col style1"><h5><b>Totalsumma</b></h5></div>
                    <div className="col text-right">1000kr</div>
                </div>
            </div>
        <div className="d-flex gap-2
        3">
            <button className='btn btn-primary w-100'>Till kassan</button>
            <button className='btn btn-outline-primary w-100'>Fortsätt shoppa</button>
        </div>
        </div>
        
    </div>
  )
}

export default Cart
