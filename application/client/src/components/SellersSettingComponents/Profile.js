import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';


const sellerProfileSettings = () => {

   return (
    <div className="sellerProfileSettings-wrapper">
        <h3>Profile</h3>
        <div className="sellerProfileSettings-firstContainer">
            <input placeholder="Bio Description" className="sellerSettingsInputs" type="text"/>
            <input placeholder="Location" className="sellerSettingsInputs" type="text"/>
            <input placeholder="Social Media" className="sellerSettingsInputs" type="text"/>
        </div>
        <div>
            <button className="sellerSettingsButtons"> Update Profile </button>
        </div>
    </div>
   );
};



export default sellerProfileSettings;