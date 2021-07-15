const INITIAL_SELLER_SETTINGS_STATE = {
   displayProducts: "test"
};

const sellerSettingsReducer = (state = INITIAL_SELLER_SETTINGS_STATE, action) => {

    switch(action.type) {
        case 'USER_SET_USERNAME':
            return {
                ...state,
                username: action.username,
            };
        
        default:
            return state;
    }
};

export default sellerSettingsReducer;