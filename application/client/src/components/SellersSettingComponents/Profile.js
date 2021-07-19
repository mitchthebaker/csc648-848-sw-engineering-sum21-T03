import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';


const sellerProfileSettings = () => {

   return (
    <div className="sellerProfileSettings-wrapper">
        <div className="sellerProfileSettings-firstContainer">
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
        </div>
    </div>
   );
};



export default sellerProfileSettings;