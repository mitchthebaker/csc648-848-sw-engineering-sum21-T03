import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
    updateFirstName,
    updateLastName,
    updateAccount,
} from '../../redux/actions/sellerSettingsActions';


const Account = () => {

    // dispatch state data back to redux
    const dispatch = useDispatch();
   
    const updateFirst = useSelector((state) => state.sellerSettingsReducer.firstName);
    const updateLast = useSelector((state) => state.sellerSettingsReducer.lastName);

    const updateAccountHandler = () => {
        dispatch(updateAccount());
    };

   return (
    <div className="sellerAccountSettings-wrapper">
        <div className="sellerAccountSettings-firstContainer">
            <h3>Personal Information</h3>
            <div className="sellerAccountSettings-firstContainer_oneSide">
                <input placeholder="First Name" className="sellerInput-Settings" value={updateFirst} onChange={(e) => dispatch(updateFirstName(e.target.value))} type="text"/>
                <input placeholder="Last Name" className="sellerInput-Settings" value={updateLast} onChange={(e) => dispatch(updateLastName(e.target.value))} type="text"/>
                <input placeholder="Birthday" className="sellerInput-Settings" type="date"/>
            </div>
            <div className="sellerAccountSettings-firstContainer_twoSide">
                <input placeholder="Email" className="sellerInput-Settings" type="text"/>
                <input placeholder="Phone" className="sellerInput-Settings" type="text"/>
                <input placeholder="UserName" className="sellerInput-Settings" type="text"/>
                <input placeholder="Password" className="sellerInput-Settings" type="text"/>
            </div>
            <div>
                <button className="sellerButton-Settings" onClick={updateAccountHandler}> Update Account </button>
            </div>
        </div>
        <div className="sellerAccountSettings-secondContainer">
            <h3>Credit Debit Card</h3>
            <div className="sellerAccountSettings-secondContainer_oneSide">
                <input placeholder="Card Number" className="sellerInput-Settings" type="text"/>
                <input placeholder="Expiration Date" className="sellerInput-Settings" type="text"/>
            </div>
            <div className="sellerAccountSettings-secondContainer">
                <input placeholder="CVV" className="sellerInput-Settings" type="text"/>
                <input placeholder="Postal Code" className="sellerInput-Settings" type="text"/>
            </div>
        </div>
    </div>
   );
};



export default Account;
