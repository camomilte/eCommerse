import React from 'react'

const Checkout = () => {
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
                <div className="item my-3">
                  <span className="price">Pris</span>
                  <p className="fw-semibold mb-1">Produkt 1</p>
                  <p className="item-description">Kategori</p>
                </div>
                <div className="border-top border-secondary-subtle pt-3">
                  <span className='fw-semibold'>Summa</span>
                  <span className="fw-semibold price">$320</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="border-bottom border-secondary-subtle pb-2">Kortbetalning</h3>
                <div className="row">
                  <div className="form-group col-sm-7">
                    <label for="card-holder" className='fw-semibold text-secondary'>Kortinnehavare</label>
                    <input id="card-holder" type="text" className="form-control mb-3" placeholder="För- och efternamn" aria-label="Card Holder" aria-describedby="basic-addon1" />
                  </div>
                  <div className="form-group col-sm-5">
                    <label for="" className='fw-semibold text-secondary'>Utgångsdatum</label>
                    <div className="input-group expiration-date">
                      <input type="text" className="form-control mb-3" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1" />
                      <span className="mx-2 pt-1">/</span>
                      <input type="text" className="form-control mb-3" placeholder="ÅÅ" aria-label="ÅÅ" aria-describedby="basic-addon1" />
                    </div>
                  </div>
                  <div className="form-group col-sm-8">
                    <label for="card-number" className='fw-semibold text-secondary'>Kortnummer</label>
                    <input id="card-number" type="text" className="form-control mb-3" placeholder="Kortnummer" aria-label="Card Holder" aria-describedby="basic-addon1" />
                  </div>
                  <div className="form-group col-sm-4">
                    <label for="cvc" className='fw-semibold text-secondary'>CVC</label>
                    <input id="cvc" type="text" className="form-control mb-3" placeholder="CVC" aria-label="Card Holder" aria-describedby="basic-addon1" />
                  </div>
                  <div className="form-group col-sm-12">
                    <button type="button" className="btn btn-primary w-100 py-3 mt-4">Lägg order</button>
                  </div>
                </div>
              </div>
            </form>
      </main>
    </div>
  )
}

export default Checkout
