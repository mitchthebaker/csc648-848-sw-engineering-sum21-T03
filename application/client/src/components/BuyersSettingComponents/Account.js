import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';


const buyerAccountSettings = () => {

   return (
    <div className="buyerAccountSettings-wrapper">
        <div className="buyerAccountSettings-firstContainer">
            <div className="buyerAccountSettings-firstContainer_oneSide">
                <p>FirstName</p>
                <input className="buyerInput-Settings" type="text"/>
                <p>LastName</p>
                <input className="buyerInput-Settings" type="text"/>
                <p>Birthday</p>
                <input className="buyerInput-Settings" type="text"/>
                <p>Email</p>
            </div>
            <div className="buyerAccountSettings-firstContainer_twoSide">
                <input className="buyerInput-Settings" type="text"/>
                <p>Phone</p>
                <input className="buyerInput-Settings" type="text"/>
                <p>UserName</p>
                <input className="buyerInput-Settings" type="text"/>
                <p>Password</p>
                <input className="buyerInput-Settings" type="text"/>
            </div>
        </div>
        <div className="buyerAccountSettings-secondContainer">
            <h3>Credit Debit Card</h3>
            <div className="buyerAccountSettings-secondContainer_oneSide">
                <p>Card Number</p>
                <input className="buyerInput-Settings" type="text"/>
                <p>Expiration Date</p>
                <input className="buyerInput-Settings" type="text"/>
            </div>
            <div className="buyerAccountSettings-secondContainer_twoSide">
                <p>CVV</p>
                <input className="buyerInput-Settings" type="text"/>
                <p>Postal Code</p>
                <input className="buyerInput-Settings" type="text"/>
            </div>
        </div>
    </div>
   );
};



export default buyerAccountSettings;
