import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {

    /*const [menuVisibility, setMenuVisibility] = useState('hide');

    if(props.visibility) {
        setMenuVisibility('show');
    }*/

    return (
        <div id="sidenav-menu" onClick={() => props.handleMouseClick()}>
            <NavLink to="/receipt-info">
                <div className="checkout-button"> $ <span> </span> Checkout </div>
            </NavLink>
        </div>
    );
};

export default Menu;