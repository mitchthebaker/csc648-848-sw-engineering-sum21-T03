import React from 'react';

const buyerShippingSettings = () => {

   return (
    <div className="buyerShippingSettings-wrapper">
        <h3>Shipping</h3>
        <div className="buyerShippingSettings-firstContainer">
            <input placeholder="Mailing address" className="buyerInput-Settings" type="text"/>
            <input placeholder="Zip Code" className="buyerInput-Settings" type="text"/>
        </div>
        <div>
            <button className="buyerSettingsButtons"> Update Shipping </button>
        </div>
    </div>
   );
};



export default buyerShippingSettings;