import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/Modules/NavBar';
import Footer from '../components/Modules/Footer';

const Checkout = (props) => {

    return (
        <div className="checkout-experience">
            <NavBar page={"Checkout"}/>
            <div className="checkout-wrapper">
                <div className="checkout-content">
                    <div className="user-checkout">
                        <div className="checkout-details">
                            <h4> Payment Details </h4>
                        </div>
                        <div className="cancel-continue-buttons">
                            <NavLink className="nav-link" to="/summary"> <span className="modify-order"> Back </span> </NavLink>
                            <NavLink className="nav-link" to="/final-invoice"> <span className="continue-order"> Checkout </span> </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Checkout;