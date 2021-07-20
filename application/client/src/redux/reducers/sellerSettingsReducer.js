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
            };
        
        case 'USER_UPDATE_BIRTHDAY':
            return {
                ...state,
                birthday: action.birthday
            };
        
        case 'USER_UPDATE_EMAIL':
            return {
                ...state,
                email: action.email
            };
        

        case 'USER_UPDATE_PHONE':
            return {
                ...state,
                phone: action.phone
            };
        
        case 'USER_UPDATE_USERNAME':
            return {
                ...state,
                username: action.username
            };
        
        
        case 'USER_UPDATE_PASSWORD':
            return {
                ...state,
                password: action.password
            };
        
        
        case 'USER_UPDATE_CARDNUMBER':
            return {
                ...state,
                cardNumber: action.cardNumber
            };
        
        
        case 'USER_UPDATE_CARDEXPIRATIONDATE':
            return {
                ...state,
                cardExpirationDate: action.cardExpirationDate
            };
        
        
        case 'USER_UPDATE_CARDCVV':
            return {
                ...state,
                cardCVV: action.cardCVV
            };
        
        case 'USER_UPDATE_CARDPOSTALCODE':
            return {
                ...state,
                cardPostalCode: action.cardPostalCode
            };
            
        
        
        default:
            return state;
    }
};

export default sellerSettingsReducer;