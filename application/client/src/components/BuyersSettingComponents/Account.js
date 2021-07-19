import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';


const buyerAccountSettings = () => {

   return (
    <div className="buyerAccountSettings-wrapper">
        <div className="buyerAccountSettings-firstContainer">
        <h3>Personal Information</h3>
            <div className="buyerAccountSettings-firstContainer_oneSide">
<<<<<<< HEAD
                <input placeholder="First Name" className="buyerInput-Settings" type="text"/>
                <input placeholder="Last Name" className="buyerInput-Settings" type="text"/>
                <input placeholder="Birthday" className="buyerInput-Settings" type="date"/>
            </div>
            <div className="buyerAccountSettings-firstContainer_twoSide">
                <input placeholder="Email" className="buyerInput-Settings" type="text"/>
                <input placeholder="Phone" className="buyerInput-Settings" type="text"/>
                <input placeholder="UserName" className="buyerInput-Settings" type="text"/>
                <input placeholder="Password" className="buyerInput-Settings" type="text"/>
=======
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
>>>>>>> 977ea56d0440cd109eda95bff01a73ccdd698048
            </div>
        </div>
        <div className="buyerAccountSettings-secondContainer">
            <h3>Credit Debit Card</h3>
            <div className="buyerAccountSettings-secondContainer_oneSide">
<<<<<<< HEAD
                <input placeholder="Card Number" className="buyerInput-Settings" type="text"/>
                <input placeholder="Expiration Date" className="buyerInput-Settings" type="text"/>
            </div>
            <div className="buyerAccountSettings-secondContainer_twoSide">
                <input placeholder="CVV" className="buyerInput-Settings" type="text"/>
                <input placeholder="Postal Code" className="buyerInput-Settings" type="text"/>
=======
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
>>>>>>> 977ea56d0440cd109eda95bff01a73ccdd698048
            </div>
        </div>
    </div>
   );
};



export default buyerAccountSettings;
