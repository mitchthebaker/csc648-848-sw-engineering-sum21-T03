import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';


const buyerProfileSettings = () => {

   return (
    <div className="buyerProfileSettings-wrapper">
        <div className="buyerProfileSettings-firstContainer">
            <p>Bio Description</p>
            <input className="buyerInput-Settings" type="text"/>
            <p>Rate Stars</p>
            <input className="buyerInput-Settings" type="text"/>
            <p>Review</p>
            <input className="buyerInput-Settings" type="text"/>
            <p>Social Media Connect</p>
            <input className="buyerInput-Settings" type="text"/>
            <p>Show buys</p>
            <input className="buyerInput-Settings" type="text"/>
            <p>Show buys Reviews</p>
            <input className="buyerInput-Settings" type="text"/>
        </div>
    </div>
   );
};



export default buyerProfileSettings;