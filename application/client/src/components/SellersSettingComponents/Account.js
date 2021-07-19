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
<<<<<<< HEAD
                <input placeholder="First Name" className="sellerInput-Settings" value={updateFirst} onChange={(e) => dispatch(updateFirstName(e.target.value))} type="text"/>
                <input placeholder="Last Name" className="sellerInput-Settings" value={updateLast} onChange={(e) => dispatch(updateLastName(e.target.value))} type="text"/>
                <input placeholder="Birthday" className="sellerInput-Settings" type="date"/>
            </div>
            <div className="sellerAccountSettings-firstContainer_twoSide">
                <input placeholder="Email" className="sellerInput-Settings" type="text"/>
                <input placeholder="Phone" className="sellerInput-Settings" type="text"/>
                <input placeholder="UserName" className="sellerInput-Settings" type="text"/>
                <input placeholder="Password" className="sellerInput-Settings" type="text"/>
=======
                <p>FirstName</p>
                <label className="sellerAccountSettings-Inputs-field_one">
                    <input className="sellerAccountSettings-Inputs" value={updateFirst} onChange={(e) => dispatch(updateFirstName(e.target.value))} type="text"/>
                    <span className="sellerAccount-Inputs_placeholder_one">Enter First Name </span>
                </label>
                <p>LastName</p>
                <label className="sellerAccountSettings-Inputs-field_two">
                    <input className="sellerAccountSettings-Inputs" value={updateLast} onChange={(e) => dispatch(updateLastName(e.target.value))} type="text"/>
                    <span className="sellerAccount-Inputs_placeholder_two">Enter Last Name </span>
                </label>
                <p>Birthday</p>
                <label className="sellerAccountSettings-Inputs-field_three">
                    <input className="sellerAccountSettings-Inputs" type="date"/>
                    <span className="sellerAccount-Inputs_placeholder_two">Enter Birthday </span>
                </label>
            </div>
            <div className="sellerAccountSettings-firstContainer_twoSide">
                <p>Email</p>
                <label className="sellerAccountSettings-Inputs-field_four">
                    <input className="sellerAccountSettings-Inputs" type="text"/>
                    <span className="sellerAccount-Inputs_placeholder_four">Enter Email </span>
                </label>
                <p>Phone</p>
                <label className="sellerAccountSettings-Inputs-field_five">
                    <input className="sellerAccountSettings-Inputs" type="text"/>
                    <span className="sellerAccount-Inputs_placeholder_five">Enter Phone </span>
                </label>
                <p>UserName</p>
                <label className="sellerAccountSettings-Inputs-field_six">
                    <input className="sellerAccountSettings-Inputs" type="text"/>
                    <span className="sellerAccount-Inputs_placeholder_six">Enter UserName </span>
                </label>
                <p>Password</p>
                <label className="sellerAccountSettings-Inputs-field_seven">
                    <input className="sellerAccountSettings-Inputs" type="text"/>
                    <span className="sellerAccount-Inputs_placeholder_seven">Enter Password </span>
                </label>
>>>>>>> 977ea56d0440cd109eda95bff01a73ccdd698048
            </div>
            <div>
                <button className="sellerButton-Settings" onClick={updateAccountHandler}> Update Account </button>
            </div>
        </div>
        <div className="sellerAccountSettings-secondContainer">
            <h3>Credit Debit Card</h3>
            <div className="sellerAccountSettings-secondContainer_oneSide">
<<<<<<< HEAD
                <input placeholder="Card Number" className="sellerInput-Settings" type="text"/>
                <input placeholder="Expiration Date" className="sellerInput-Settings" type="text"/>
            </div>
            <div className="sellerAccountSettings-secondContainer">
                <input placeholder="CVV" className="sellerInput-Settings" type="text"/>
                <input placeholder="Postal Code" className="sellerInput-Settings" type="text"/>
=======
                <p>Card Number</p>
                <label className="sellerAccountSettings-Inputs-field_eight">
                    <input className="sellerAccountSettings-Inputs" type="text"/>
                    <span className="sellerAccount-Inputs_placeholder_eight">Enter Card Number</span>
                </label>
                <p>Expiration Date</p>
                <label className="sellerAccountSettings-Inputs-field_nine">
                    <input className="sellerAccountSettings-Inputs" type="text"/>
                    <span className="sellerAccount-Inputs_placeholder_nine">Enter Expiration Date</span>
                </label>
            </div>
            <div className="sellerAccountSettings-secondContainer">
                <p>CVV</p>
                <label className="sellerAccountSettings-Inputs-field_ten">
                    <input className="sellerAccountSettings-Inputs" type="text"/>
                    <span className="sellerAccount-Inputs_placeholder_ten">Enter CVV</span>
                </label>
                <p>Postal Code</p>
                <label className="sellerAccountSettings-Inputs-field_eleven">
                    <input className="sellerAccountSettings-Inputs" type="text"/>
                    <span className="sellerAccount-Inputs_placeholder_eleven">Enter Postal Code</span>
                </label>
>>>>>>> 977ea56d0440cd109eda95bff01a73ccdd698048
            </div>
        </div>
    </div>
   );
};



export default Account;
