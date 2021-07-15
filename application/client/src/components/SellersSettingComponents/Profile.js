import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';


const sellerProfileSettings = () => {

   return (
    <div className="sellerProfileSettings-wrapper">
        <div className="sellerProfileSettings-firstContainer">
            <p>Bio Description</p>
            <input type="text"/>
            <p>Location</p>
            <input type="text"/>
            <p>Social Media Connect</p>
            <input type="text"/>
        </div>
    </div>
   );
};



export default sellerProfileSettings;