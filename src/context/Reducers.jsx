export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'ADD_TO_CART':
            return {...state, cart: [...state.cart, {...action.payload, qty: 1}] 
            };
        case 'REMOVE_FROM_CART':
            return {...state, 
                cart: state.cart.filter((c) => c._id !== action.payload._id),
            };
      default:
        return state;
    }
  };

 /*  export const prodReducer = (state, action) => {

  }; */