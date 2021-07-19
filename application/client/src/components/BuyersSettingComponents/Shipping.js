import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';


const buyerShippingSettings = () => {

   return (
    <div className="buyerShippingSettings-wrapper">
        <h3>Shipping</h3>
        <div className="buyerShippingSettings-firstContainer">
            <input placeholder="Mailing Address" className="buyerInput-Settings" type="text"/>
            <input placeholder="Zip Code" className="buyerInput-Settings" type="text"/>
        </div>
    </div>
   );
};



export default buyerShippingSettings;