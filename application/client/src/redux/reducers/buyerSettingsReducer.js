const INITIAL_BUYER_SETTINGS_STATE = {
    displayProducts: "test_buyer"
 };
 
 const buyerSettingsReducer = (state = INITIAL_BUYER_SETTINGS_STATE, action) => {
 
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
 
 export default buyerSettingsReducer;