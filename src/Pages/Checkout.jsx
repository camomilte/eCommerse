import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Checkout = () => {
  // Extract the cart state and dispatch function from the CartState context
  const {
      state: { cart },
      dispatch
  } = CartState();

  // Create navigate function to redirect user to other routes
  const navigate = useNavigate();

  const [total, setTotal] = useState();

  useEffect(() => {
      setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  const handlePlaceOrder = async () => {
  
    if (cart.length === 0) {
      alert('OBS! Din varukorg är tom! Lägg varor i varukorgen innan du lägger en order.');
      return;
    }
    
    const orderPayload = {
      products:
        cart.map(product => ({
          productId: product._id,
          quantity: 1,
        })),
    };
  
    try {
      const response = await axios.post('https://js2-ecommerce-api.vercel.app/api/orders', orderPayload);
      navigate('/ordersuccess'); // Navigate to success page after successfull API request
      console.log('Order Response:', response.data);
    } 
    
    catch (error) {
      navigate('/errorpage') // Navigate to error page in case of error
      console.log(error)
    }
  };

  return (
    <div>
      <main className="container py-4">

            <div className="mt-3 mb-5">
              <h1 className='text-center mb-2 text-primary display-2'>Kassa</h1>
              <p className='text-center text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
            </div>
            <form className='checkout-form max-width-custom mx-auto mb-5'>
              <div className="products p-4 bg-body-secondary">
                <h3 className="border-bottom border-secondary-subtle pb-2">Sammanfattning</h3>
                
                {cart.map ((product) => (
                  <>
                    <div className="item my-3" key={product._id}>
                      <span className="price">{product.price} kr</span>
                      <p className="fw-semibold mb-1">{product.name}</p>
                      <p className="item-description">{product.category}</p>
                    </div>
                    <div className="border-top border-secondary-subtle pt-3">
                      <span className='fw-semibold'>Summa</span>
                      <span className="fw-semibold price">{total} kr</span>
                    </div>
                  </>
                ))}
              </div>
              <div className="p-4">
                <h3 className="border-bottom border-secondary-subtle pb-2">Kortbetalning</h3>
                <div className="row">
                  <div className="form-group col-sm-7">
                    <label htmlFor="card-holder" className='fw-semibold text-secondary'>Kortinnehavare</label>
                    <input id="card-holder" type="text" className="form-control mb-3" placeholder="För- och efternamn" aria-label="Card Holder" aria-describedby="basic-addon1" disabled/>
                  </div>
                  <div className="form-group col-sm-5">
                    <label htmlFor="date" className='fw-semibold text-secondary'>Utgångsdatum</label>
                    <div className="input-group expiration-date">
                      <input name="date" type="text" className="form-control mb-3" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1" disabled/>
                      <span className="mx-2 pt-1">/</span>
                      <input name="date" type="text" className="form-control mb-3" placeholder="ÅÅ" aria-label="ÅÅ" aria-describedby="basic-addon1" disabled/>
                    </div>
                  </div>
                  <div className="form-group col-sm-8">
                    <label htmlFor="card-number" className='fw-semibold text-secondary'>Kortnummer</label>
                    <input id="card-number" type="text" className="form-control mb-3" placeholder="Kortnummer" aria-label="Card Holder" aria-describedby="basic-addon1" disabled/>
                  </div>
                  <div className="form-group col-sm-4">
                    <label htmlFor="cvc" className='fw-semibold text-secondary'>CVC</label>
                    <input id="cvc" type="text" className="form-control mb-3" placeholder="CVC" aria-label="Card Holder" aria-describedby="basic-addon1" disabled/>
                  </div>
                  <div className="form-group col-sm-12">
                    <button type="button" className="btn btn-primary w-100 py-3 mt-4" onClick={handlePlaceOrder}>Lägg order</button>
                  </div>
                </div>
              </div>
            </form>
      </main>
    </div>
  )
}

export default Checkout
