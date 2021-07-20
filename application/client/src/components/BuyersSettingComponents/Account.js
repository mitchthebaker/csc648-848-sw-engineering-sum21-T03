import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';


const buyerAccountSettings = () => {

   return (
    <div className="buyerAccountSettings-wrapper">
        <div className="buyerAccountSettings-firstContainer">
            <h3>Information</h3>
            <div className="buyerAccountSettings-firstContainer_oneSide">
                <input placeholder="First Name" className="buyerInput-Settings" type="text"/>
                <input placeholder="Last Name" className="buyerInput-Settings" type="text"/>
                <input placeholder="Birthday" className="buyerInput-Settings" type="text"/>
            </div>
            <div className="buyerAccountSettings-firstContainer_twoSide">
                <input placeholder="Email" className="buyerInput-Settings" type="text"/>
                <input placeholder="Phone" className="buyerInput-Settings" type="text"/>
                <input placeholder="UserName" className="buyerInput-Settings" type="text"/>
                <input placeholder="Password" className="buyerInput-Settings" type="text"/>
            </div>
        </div>
        <div className="buyerAccountSettings-secondContainer">
            <h3>Credit Debit Card</h3>
            <div className="buyerAccountSettings-secondContainer_oneSide">
                <input placeholder="Card Number" className="buyerInput-Settings" type="text"/>
                <input placeholder="Expiration Date" className="buyerInput-Settings" type="text"/>
            </div>
            <div className="buyerAccountSettings-secondContainer_twoSide">
                <input placeholder="CVV" className="buyerInput-Settings" type="text"/>
                <input placeholder="Postal Code" className="buyerInput-Settings" type="text"/>
            </div>
        </div>
    </div>
   );
};



export default buyerAccountSettings;
