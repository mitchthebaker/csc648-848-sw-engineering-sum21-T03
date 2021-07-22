const INITIAL_REGISTER_STATE = {
    username: '',
    password: '',
    confirmPassword: '',
    registered: false,
    termsOfServices: false,
};

const registerReducer = (state = INITIAL_REGISTER_STATE, action) => {

    switch(action.type) {
        case 'USER_SET_USERNAME':
            return {
                ...state,
                username: action.username,
            };
        
        case 'USER_SET_PASSWORD':
            return {
                ...state,
                password: action.password,
            };
        
        case 'USER_SET_CONFIRM_PASSWORD':
            return {
                ...state,
                confirmPassword: action.confirmPassword,
            };
        
        case 'USER_IS_REGISTERED':
            return {
                ...state,
                registered: action.registered,
            };

        case 'USER_SET_TOS':
            return {
                ...state,
                termsOfServices: action.TOS,
            }
        
        default:
            return state;
    }
};

export default registerReducer;