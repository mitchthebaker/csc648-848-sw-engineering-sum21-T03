import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';


const sellerProfileSettings = () => {

   return (
    <div className="sellerProfileSettings-wrapper">
        <h3>Profile</h3>
        <div className="sellerProfileSettings-firstContainer">
<<<<<<< HEAD
            <input placeholder="Bio Description" className="sellerInput-Settings" type="text"/>
            <input placeholder="Location" className="sellerInput-Settings" type="text"/>
            <input placeholder="Social Media Connect" className="sellerInput-Settings" type="text"/>
=======
            <p>Bio Description</p>
            <label className="sellerProfileSettings-Inputs-field_one">
                <input className="sellerProfileSettings-Inputs" type="text"/>
                <span className="sellerProfileSettings-Inputs_placeholder_one">Enter Description </span>
            </label>
            <p>Location</p>
            <label className="sellerProfileSettings-Inputs-field_two">
                <input className="sellerProfileSettings-Inputs" type="text"/>
                <span className="sellerProfileSettings-Inputs_placeholder_two">Enter Location </span>
            </label>
            <p>Social Media Connect</p>
            <label className="sellerProfileSettings-Inputs-field_three">
                <input className="sellerProfileSettings-Inputs" type="text"/>
                <span className="sellerProfileSettings-Inputs_placeholder_three">Enter Social Media </span>
            </label>
>>>>>>> 977ea56d0440cd109eda95bff01a73ccdd698048
        </div>
    </div>
   );
};



export default sellerProfileSettings;