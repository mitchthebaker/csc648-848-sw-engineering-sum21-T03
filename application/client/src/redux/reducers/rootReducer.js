import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import productReducer from './productReducer';

export default combineReducers({
  registerReducer,
  loginReducer,
  productReducer  
});