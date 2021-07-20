const INITIAL_SELLER_SETTINGS_STATE = {
   displayProducts: 'test',
   firstName: '',
   lastName: '',
};

const sellerSettingsReducer = (state = INITIAL_SELLER_SETTINGS_STATE, action) => {

    console.log(action);

    switch(action.type) {
        case 'USER_UPDATE_FIRSTNAME':
            return {
                ...state,
                firstName: action.firstName,
            };

        case 'USER_UPDATE_LASTNAME':
            return {
                ...state,
                lastName: action.lastName
            }
        
        default:
            return state;
    }
};

export default sellerSettingsReducer;