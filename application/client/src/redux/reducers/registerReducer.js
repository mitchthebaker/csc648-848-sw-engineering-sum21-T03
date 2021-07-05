const INITIAL_STATE = {
    username: '',
    password: '',
    confirmPassword: '',
    registered: false
};

const registerReducer = (state = INITIAL_STATE, action) => {

    console.log(action);

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
        
        default:
            return state;
    }
};

export default registerReducer;