import React from 'react'

import ProductCard from './Card'
import Loading from './Loading'
import ErrorPage from '../pages/ErrorPage'
import useAxiosGet from '../hooks/HttpRequest'

const ProductsList = () => {
    const url = 'https://js2-ecommerce-api.vercel.app/api/products';

    let products = useAxiosGet(url)

    let content = null

    {/* Display when product is loading */} 
    if(products.loading) {
        content = <Loading />
    }

    {/* Display when there is an error */}
    if(products.error) {
        content = <ErrorPage />
    }

    if(products.data) {
        content = 
        products.data.map((product) => 
            <div key={product._id} className='products-list container mt-4'>
                <div className='row'>
                    <ProductCard 
                        product={product}
                    />
                </div>
            </div>
        )
    }


     
    return (
        <div>
            {content}
        </div>
    
    )
}

export default ProductsList
