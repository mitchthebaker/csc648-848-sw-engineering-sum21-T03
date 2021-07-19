import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';


const buyerShippingSettings = () => {

   return (
    <div className="buyerShippingSettings-wrapper">
        <div className="buyerShippingSettings-firstContainer">
            <p>Mailing address</p>
            <input className="buyerInput-Settings" type="text"/>
            <p>Zip Code</p>
            <input className="buyerInput-Settings" type="text"/>
        </div>
    </div>
   );
};



export default buyerShippingSettings;