import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Loading from '../components/Loading';
import ErrorPage from './ErrorPage';
import NotFound from './NotFound';
import { CartState } from '../context/Context';

function Product() {
    const { id } = useParams()
    const { state: { products, cart }, loading, error, dispatch } = CartState();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (products && products.length > 0) {
            const selectedProduct = products.find(product => product._id === id);
            setProduct(selectedProduct);
        }
    }, [products, id]);

    /* Handle loading */ 
    if(loading) return <Loading />;
    
    /* Handle error */
    if(error) return <ErrorPage />;

    /* Handle unavailable product */
    if(!product) return <NotFound />

    /* Display when data is returned */
    return (
        <div className="container py-5">
            <div className="row">
                
                {/* Product images */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <img src={product.images[0]} className="card-img-top" alt="Product Image"></img>
                        <div className="card-body">
                            <div className="row g-2">
                                <div className="col-3">
                                    <img src={product.images[1]} className="img-thumbnail" alt="Thumbnail 1"></img>
                                </div>
                                <div className="col-3">
                                    <img src={product.images[2]} className="img-thumbnail" alt="Thumbnail 2"></img>
                                </div>
                                <div className="col-3">
                                    <img src={product.images[3]} className="img-thumbnail" alt="Thumbnail 3"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --Product Details-- */}
                <div className="col-md-6">
                    <h1 className="h2 mb-3">{product.name}</h1>
                    <p className='text-secondary'>Katergori:{product.category}</p>
                    <div className="mb-3">
                        <span className="h4 me-2">{product.price} kr</span>
                    </div>

                    { /* Buttons */}
                    <div className="d-grid gap-2">
                    {
                            cart.some(p=>p._id===product._id)?(
                                <button 
                                onClick={() => {
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: product
                                    })
                                }}
                                className="btn btn-danger">Ta bort från varukorg</button>
                            ) : ( 
                            <button 
                                onClick={() => {
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: product
                                    })
                            }}
                            className="btn btn-primary">Lägg i varukorg</button>
                        )}
                        
                        <button className="btn btn-outline-secondary" type="button">
                                <i className="far fa-heart me-2"></i>Önskelista
                        </button>
                    </div>

                    <p className="mb-5 mt-3">{product.description}</p>

                    { /* --Additional-- */}
                    <div className="mt-4">
                        <div className="d-flex align-items-center mb-2">
                            <i className="fas fa-truck text-primary me-2"></i>
                            <span>Fri frakt på ordar över 500kr</span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <i className="fas fa-undo text-primary me-2"></i>
                            <span>30 dagars öppet köp</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fas fa-shield-alt text-primary me-2"></i>
                            <span>2 års garanti</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Product

