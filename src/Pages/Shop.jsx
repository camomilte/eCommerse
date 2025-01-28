import React from 'react'
import ProductsList from '../components/ProductsList'
import CatalogHeader from '../components/CatalogHeader'
import { CartState } from '../context/Context'
import Loading from '../components/Loading'
import ErrorPage from './ErrorPage'


const Shop = () => {
    const { state, loading, error } = CartState();
    const { products } = state || {};

    if (loading) return <Loading />;
    if (error) return <ErrorPage error={error} /> ;
  
    return (
    <div>
        <CatalogHeader />
        {products && products.length > 0 ? (
            <ProductsList products={products} />
            ) : (
            <p className="text-center py-3">No products available</p>
      )}

    </div>

    
  )
}

export default Shop
