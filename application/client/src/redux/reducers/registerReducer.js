const INITIAL_STATE = {
    username: '',
    password: '',
    confirmPassword: ''
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
        
        default:
            return state;
    }
};

export default registerReducer;