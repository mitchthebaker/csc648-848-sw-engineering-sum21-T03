import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/Modules/NavBar';
import Footer from '../components/Modules/Footer';

const Summary = (props) => {

    return (
        <div>
            <NavBar page={"Summary"}/>
            <div className="summary-wrapper">
                <div className="summary-content">
                    <div className="user-summary">
                        <div className="product-details">
                            <span> Quantity </span>
                            <span> Product </span>
                            <span> Name </span>
                            <span> Price </span>
                        </div>
                        <div className="cancel-continue-buttons">
                            <NavLink className="nav-link" to="/receipt-info"> <span className="modify-order"> Modify Order </span> </NavLink>
                            <NavLink className="nav-link" to="/checkout"> <span className="continue-order"> Continue </span> </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Summary;