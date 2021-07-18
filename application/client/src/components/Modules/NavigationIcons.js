import { NavLink } from 'react-router-dom';
import CustomBtn from './CustomBtn';

const NavigationIcons = (props) => {

    if(props.page === 'homePage') {
        return (
            <div className="navigation-icons">
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/profile"> Profile </NavLink>
                <NavLink className="nav-link" to="/profile"> Cart </NavLink>
                <NavLink className="nav-link" id="login-link" to="/login"> Login </NavLink> 
            </div>
        );
    }

    if(props.page === 'profilePage') {
        return (
            <div className="navigation-icons">
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/userFeed"> User Feed </NavLink>
                <NavLink className="nav-link" to="/seller-settings"> Seller Settings </NavLink>
                <NavLink className="nav-link" to="/buyer-settings"> Buyer Settings </NavLink>
            </div>
        );
    }

    if(props.page === 'sellerSettings') {
        return (
            <div className="navigation-icons">
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/profile"> Profile </NavLink>
                <NavLink className="nav-link" to="/userFeed"> User Feed </NavLink>
                <NavLink className="nav-link" to="/buyer-settings"> Buyer Settings </NavLink>
            </div>
        );
    }

    if(props.page === 'buyerSettings') {
        return (
            <div className="navigation-icons">
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/profile"> Profile </NavLink>
                <NavLink className="nav-link" to="/userFeed"> User Feed </NavLink>
                <NavLink className="nav-link" to="/seller-settings"> Seller Settings </NavLink>
            </div>
        );
    }
};

export default NavigationIcons;