import React from 'react';

const buyerProfileSettings = () => {

   return (
    <div className="buyerProfileSettings-wrapper">
        <h3>Profile</h3>
        <div className="buyerProfileSettings-firstContainer">
            <input placeholder="Bio Description" className="buyerInput-Settings" type="text"/>
            <input placeholder="Rate Stars" className="buyerInput-Settings" type="text"/>
            <input placeholder="Review" className="buyerInput-Settings" type="text"/>
            <input placeholder="Social Media" className="buyerInput-Settings" type="text"/>
            <input placeholder="Show buys" className="buyerInput-Settings" type="text"/>
            <input placeholder="Show buys Reviews" className="buyerInput-Settings" type="text"/>
        </div>
        <div>
            <button className="buyerSettingsButtons"> Update Profile </button>
        </div>
    </div>
   );
};



export default buyerProfileSettings;