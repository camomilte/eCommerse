import React from 'react'
import ProductCard from './Card'

const ProductsList = ({ products }) => {
    return (
        <div className="products-list container mt-4">
            <div className="row">
                {products.map((product) => (
                    <div key={product._id} className="col-md-4 mb-4">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsList
