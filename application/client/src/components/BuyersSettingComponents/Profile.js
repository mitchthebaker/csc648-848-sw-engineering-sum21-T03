import React, {useState} from 'react';

const Profile = () => {

    


   return (
    <div className="buyerProfileSettings-wrapper">
        <h3>Profile</h3>
        <div className="buyerProfileSettings-firstContainer">
            <input placeholder="Bio Description" className="buyerInput-Settings" type="text"/>
            <input placeholder="Rate Stars" className="buyerInput-Settings" type="text"/>
            <input placeholder="Review" className="buyerInput-Settings" type="text"/>
            <input placeholder="Social Media" className="buyerInput-Settings" type="text"/>
        </div>

        <div class="buyerProfileSettings-secondContainer">
            <div class="buyerProfileSettings-row">
                <div class="buyerProfileSettings-col-xs-12">
                    <p>One a scale of 1-10 of liking this app?</p>
                    <div class="buyerProfileSettings-chart-scale">
                        <button class="btn btn-scale btn-scale-asc-1" id="rate1">1</button>
                        <button class="btn btn-scale btn-scale-asc-2" id="rate2">2</button>
                        <button class="btn btn-scale btn-scale-asc-3" id="rate3">3</button>
                        <button class="btn btn-scale btn-scale-asc-4" id="rate4">4</button>
                        <button class="btn btn-scale btn-scale-asc-5" id="rate5">5</button>
                        <button class="btn btn-scale btn-scale-asc-6" id="rate6">6</button>
                        <button class="btn btn-scale btn-scale-asc-7" id="rate7">7</button>
                        <button class="btn btn-scale btn-scale-asc-8" id="rate8">8</button>
                        <button class="btn btn-scale btn-scale-asc-9" id="rate9">9</button>
                        <button class="btn btn-scale btn-scale-asc-10" id="rate10">10</button>
                    </div>
                </div>
            </div>

            <div className="buyerProfileSettings-thirdContainer">
                <p>Show buys <input type="checkbox"/></p>
                <p>Show buys Reviews <input type="checkbox"/></p>
            </div>
            <div>
                <button className="buyerSettingsButtons"> Update Profile </button>
            </div>
        </div>
    </div>
   );
};



export default Profile;