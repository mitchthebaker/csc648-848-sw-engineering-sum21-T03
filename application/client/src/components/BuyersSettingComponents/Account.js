import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';


const buyerAccountSettings = () => {

   return (
    <div className="buyerAccountSettings-wrapper">
        <div className="buyerAccountSettings-firstContainer">
            <p>FirstName</p>
            <input type="text"/>
            <p>LastName</p>
            <input type="text"/>
            <p>Birthday</p>
            <input type="text"/>
            <p>Email</p>
            <input type="text"/>
            <p>Phone</p>
            <input type="text"/>
            <p>UserName</p>
            <input type="text"/>
            <p>Password</p>
            <input type="text"/>
        </div>
        <div className="buyerAccountSettings-secondContainer">
            <p>Credit Debit Card</p>
            <input type="text"/>
            <p>Expiration Date</p>
            <input type="text"/>
            <p>CVV</p>
            <input type="text"/>
            <p>Postal Code</p>
            <input type="text"/>
        </div>
    </div>
   );
};



export default buyerAccountSettings;
