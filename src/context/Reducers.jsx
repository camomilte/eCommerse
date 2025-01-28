export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: null
            };
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