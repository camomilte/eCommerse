import React, { createContext, useContext, useEffect, useReducer, } from 'react';
import { cartReducer } from './Reducers';
import useAxiosGet from '../hooks/HttpRequest';

const CartContext = createContext();

const Context = ({ children }) => {
    const url = 'https://js2-ecommerce-api.vercel.app/api/products';
    
    const { loading, data: productsData, error } = useAxiosGet(url);
    
    const initialState = {
        products: [],
        cart: [],
        loading: true,
        error: null
    };
    
    const [state, dispatch] = useReducer(cartReducer, initialState);

   /*  const [prodState, prodDispatch] = useReducer(prodReducer, {
        category: laptop,
        category: mobiltelefon,
        category: dammsugare,
        category: TV
    }); */
    
    useEffect(() => {
        if (productsData) {
            dispatch({
                type: 'SET_PRODUCTS',
                payload: productsData,
            });
            dispatch({
                type: 'SET_LOADING',
                payload: false,
            });
        }
    }, [productsData]);

    useEffect (() => {
        if (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: error,
            });
            dispatch({
                type: 'SET_LOADING',
                payload: false,
            });
        }
    }, [error]);
    
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
    };


export default Context;

export const CartState = () => {
    return useContext(CartContext)
};
