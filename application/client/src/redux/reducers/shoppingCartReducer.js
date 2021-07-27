const INITIAL_CART_STATE = {
    cart: []
};

const shoppingCartReducer = (state = INITIAL_CART_STATE, action) => {

    console.log(action);

    switch(action.type) {
        case 'SET_CART_CONTENTS':
            return {
                ...state,
                cart: action.cart,
            };
        
        default:
            return state;
    }
};

export default shoppingCartReducer;