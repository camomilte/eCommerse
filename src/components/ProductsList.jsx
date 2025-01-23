import axios from 'axios'
import React, { useEffect, useState } from 'react'

import ProductCard from './Card'
import Loading from './Loading'
import ErrorPage from '../pages/ErrorPage'

const ProductsList = () => {
    const url = 'https://js2-ecommerce-api.vercel.app/api/products';
    const [products, setProducts] = useState({
        loading: false,
        data: null
    })

    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            setProducts({
                loading: false, 
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            setProducts({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url])

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
