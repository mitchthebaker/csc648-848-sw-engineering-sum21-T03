import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/Modules/NavBar';
import Footer from '../components/Modules/Footer';

const Summary = (props) => {

    return (
        <div className="checkout-experience">
            <NavBar page={"Summary"}/>
            <div className="summary-wrapper">
                <div className="summary-content">
                    <div className="user-summary">
                        <div className="product-details">
                            <span className="product-detail-span"> Quantity </span>
                            <span className="product-detail-span"> Product </span>
                            <span className="product-detail-span"> Name </span>
                            <span className="product-detail-span"> Price </span>
                        </div>
                        <div className="cancel-continue-buttons">
                            <NavLink className="nav-link" to="/receipt-info"> <span className="modify-order"> Back </span> </NavLink>
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