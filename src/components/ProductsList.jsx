import React from 'react'
import ProductCard from './Card'

const ProductsList = ({ products }) => {
    return (
        <div className="products-list container mt-4">
            <div className="row">
                {products.map((product) => (
                    <div key={product._id} className="col-md-12 mb-4 col-lg-6">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsList
