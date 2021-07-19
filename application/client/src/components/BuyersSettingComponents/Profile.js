import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';


const buyerProfileSettings = () => {

<<<<<<< HEAD
    return (
        <div className="buyerProfileSettings-wrapper">
            <h3>Profile</h3>
            <div className="buyerProfileSettings-firstContainer">
                <input placeholder="Bio Description" className="buyerInput-Settings" type="text"/>
                <input placeholder="Rate Stars" className="buyerInput-Settings" type="text"/>
                <input placeholder="Review" className="buyerInput-Settings" type="text"/>
                <input placeholder="Social Media" className="buyerInput-Settings" type="text"/>
                <input placeholder="Show buys" className="buyerInput-Settings" type="text"/>
                <input placeholder="Show buys Review" className="buyerInput-Settings" type="text"/>
            </div>
=======
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
>>>>>>> 977ea56d0440cd109eda95bff01a73ccdd698048
        </div>
       );
};



export default buyerProfileSettings;