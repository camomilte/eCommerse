import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Loading from '../components/Loading';
import ErrorPage from './ErrorPage';

function Product() {
    const { id } = useParams()
    const url = `https://js2-ecommerce-api.vercel.app/api/products/${id}`;
    const [product, setProduct] = useState({
        loading: false,
        data: null
    })

    let content = null

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            setProduct({
                loading: false, 
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            setProduct({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url])

    {/* Display when product is loading */} 
    if(product.loading) {
        content = <Loading />
    }

    {/* Display when data is returned */}
    if(product.data) {
        content =
            <div className="container py-5">
                <div className="row">
                    
                    {/* Product images */}
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <img src={product.data.images[0]} className="card-img-top" alt="Product Image"></img>
                            <div className="card-body">
                                <div className="row g-2">
                                    <div className="col-3">
                                        <img src={product.data.images[1]} className="img-thumbnail" alt="Thumbnail 1"></img>
                                    </div>
                                    <div className="col-3">
                                        <img src={product.data.images[2]} className="img-thumbnail" alt="Thumbnail 2"></img>
                                    </div>
                                    <div className="col-3">
                                        <img src={product.data.images[3]} className="img-thumbnail" alt="Thumbnail 3"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --Product Details-- */}
                    <div className="col-md-6">
                        <h1 className="h2 mb-3">{product.data.name}</h1>
                        <p className='text-secondary'>{product.data.category}</p>
                        <div className="mb-3">
                            <span className="h4 me-2">{product.data.price} kr</span>
                        </div>

                        { /* Buttons */}
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="button">Lägg till i varukorg</button>
                            <button className="btn btn-outline-secondary" type="button">
                                    <i className="far fa-heart me-2"></i>Önskelista
                            </button>
                        </div>

                        <p className="mb-5 mt-3">{product.data.description}</p>

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
    }

    {/* Display when there is an error */}
    if(product.error) {
        content = <ErrorPage />
    }

    return (
        <div>{content}</div>

    )

}

export default Product

