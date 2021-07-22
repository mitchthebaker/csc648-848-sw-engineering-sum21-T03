import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';

const NavigationIcons = (props) => {

    const [visibility, setVisibility] = useState([false]);

    const handleMouseClick = () => {
        console.log(visibility);
        setVisibility(!visibility);
        console.log(visibility);
    };

    if(props.page === 'Home' || props.page === 'Login' || props.page === 'Register' || props.page === 'About' || props.page === 'Contact') {
        return (
            <div className="navigation-icons">
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/profile"> Profile </NavLink>
                <NavLink className="nav-link" id="login-link" to="/login"> Login </NavLink> 
            </div>
        );
    }

    if(props.page === 'Baker' || props.page === 'Chuson' || props.page === 'Eusebio' || props.page === 'Krina' || props.page === 'Rowena' || props.page === 'Schroeder' || props.page === 'Walker') {
        return (
            <div className="navigation-icons">
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/about"> About </NavLink>
                <NavLink className="nav-link" id="login-link" to="/login"> Login </NavLink> 
            </div>
        );
    }

    if(props.page === 'Profile') {
        return (
            <div className="navigation-icons">
                <NavLink className="nav-link" to="/"> Home </NavLink>
                {/*<NavLink className="nav-link" to="/userFeed"> User Feed </NavLink>*/}
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
                {/*<NavLink className="nav-link" to="/userFeed"> User Feed </NavLink>*/}
                <NavLink className="nav-link" to="/buyer-settings"> Buyer Settings </NavLink>
            </div>
        );
    }

    if(props.page === 'buyerSettings') {
        return (
            <div className="navigation-icons">
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/profile"> Profile </NavLink>
                {/*<NavLink className="nav-link" to="/userFeed"> User Feed </NavLink>*/}
                <NavLink className="nav-link" to="/seller-settings"> Seller Settings </NavLink>
            </div>
        );
    }

    if(props.page === 'receiptInfo' || props.page === 'Summary' || props.page === 'Checkout' || props.page === 'finalInvoice') {
        return (
            <div className="navigation-icons">
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/profile"> Profile </NavLink>
            </div>
        );
    }

    if(props.page === 'Product') {
        return (
            <div className="navigation-icons">
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/profile"> Profile </NavLink>
                <NavLink className="nav-link" id="login-link" to="/login"> Login </NavLink> 
                <Menu handleMouseClick={handleMouseClick} visibility={visibility}/>
            </div>
        );
    }
};

export default NavigationIcons;