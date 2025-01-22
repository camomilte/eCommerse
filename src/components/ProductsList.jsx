import React from 'react'
import ProductCard from './Card'

const ProductsList = () => {
  return (
    <div className='products-list container mt-4'>
        <div className='row'>
                <ProductCard />
        </div>
    </div>
  )
}

export default ProductsList
