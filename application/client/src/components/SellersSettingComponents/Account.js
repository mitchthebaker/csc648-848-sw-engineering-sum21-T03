import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';


const sellerAccountSettings = () => {

   return (
    <div className="sellerAccountSettings-wrapper">
        <div className="sellerAccountSettings-firstContainer">
            <div className="sellerAccountSettings-firstContainer_oneSide">
                <p>FirstName</p>
                <input type="text"/>
                <p>LastName</p>
                <input type="text"/>
                <p>Birthday</p>
                <input type="date"/>
                <p>Email</p>
            </div>
            <div className="sellerAccountSettings-firstContainer_twoSide">
                <input type="text"/>
                <p>Phone</p>
                <input type="text"/>
                <p>UserName</p>
                <input type="text"/>
                <p>Password</p>
                <input type="text"/>
            </div>
        </div>
        <div className="sellerAccountSettings-secondContainer">
            <h3>Credit Debit Card</h3>
            <div className="sellerAccountSettings-secondContainer_oneSide">
                <p>Card Number</p>
                <input type="text"/>
                <p>Expiration Date</p>
                <input type="text"/>
            </div>
            <div className="sellerAccountSettings-secondContainer">
                <p>CVV</p>
                <input type="text"/>
                <p>Postal Code</p>
                <input type="text"/>
            </div>
        </div>
    </div>
   );
};



export default sellerAccountSettings;
