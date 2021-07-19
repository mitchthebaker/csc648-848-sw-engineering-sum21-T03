import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';


const buyerShippingSettings = () => {

   return (
    <div className="buyerShippingSettings-wrapper">
        <h3>Shipping</h3>
        <div className="buyerShippingSettings-firstContainer">
<<<<<<< HEAD
            <input placeholder="Mailing Address" className="buyerInput-Settings" type="text"/>
            <input placeholder="Zip Code" className="buyerInput-Settings" type="text"/>
=======
            <p>Mailing address</p>
            <input className="buyerInput-Settings" type="text"/>
            <p>Zip Code</p>
            <input className="buyerInput-Settings" type="text"/>
>>>>>>> 977ea56d0440cd109eda95bff01a73ccdd698048
        </div>
    </div>
   );
};



export default buyerShippingSettings;