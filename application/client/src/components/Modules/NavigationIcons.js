import { NavLink } from 'react-router-dom';
import CustomBtn from './CustomBtn';

const NavigationIcons = () => {

    return (
        <div className="navigation-icons">    
            <NavLink className="nav-link" to="/"> Home </NavLink>
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
            <NavLink className="nav-link" to="/profile">Cart</NavLink>
            <NavLink className="nav-link" id="login-link" to="/login">Login</NavLink> 
        </div>
    );
};

export default NavigationIcons;