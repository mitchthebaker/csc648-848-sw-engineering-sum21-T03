import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';


const sellerProfileSettings = () => {

   return (
    <div className="sellerProfileSettings-wrapper">
        <h3>Profile</h3>
        <div className="sellerProfileSettings-firstContainer">
            <input placeholder="Bio Description" className="sellerInput-Settings" type="text"/>
            <input placeholder="Location" className="sellerInput-Settings" type="text"/>
            <input placeholder="Social Media Connect" className="sellerInput-Settings" type="text"/>
        </div>
    </div>
   );
};



export default sellerProfileSettings;