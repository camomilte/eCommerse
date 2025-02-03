import React from 'react'
import ProductsList from '../components/ProductsList'
import CatalogHeader from '../components/CatalogHeader'
import { CartState } from '../context/Context'
import Loading from '../components/Loading'
import ErrorPage from './ErrorPage'


const Shop = () => {
  // Extract the cart state and dispatch function from the CartState context
  const { state } = CartState();
  const { products, loading, error } = state || {};

  if (loading) return <Loading />;
  if (error) return <ErrorPage error={error} /> ;

  return (
  <div>
    <CatalogHeader />
    <ProductsList products={products} />
  </div>

    
  )
}

export default Shop
