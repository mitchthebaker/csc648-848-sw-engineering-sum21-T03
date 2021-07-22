import React, {useEffect, useState} from 'react';
import NavBar from '../components/Modules/NavBar';
import ProductCreationForm from '../components/ProductCreationForm';
import Account from '../components/BuyersSettingComponents/Account'; 
import Activities from '../components/BuyersSettingComponents/Activities';
import Profile from '../components/BuyersSettingComponents/Profile';
import Shipping from '../components/BuyersSettingComponents/Shipping';
import PurchaseAgreement from '../components/BuyersSettingComponents/PurchaseAgreement';


import { connect, useDispatch } from 'react-redux';
import HamburgerMenu from '../components/Modules/HamburgerMenu';


const BuyerSettings = (props) => {

    // test comment for showing multiple commits in a pull request 

    const [toggleAccount, set_toggleAccount] = useState(false); 
    const [toggleProfile, set_toggleProfile] = useState(false); 
    const [toggleShipping, set_toggleShipping] = useState(false); 
    const [toggleActivities, set_toggleActivities] = useState(false); 
    const [togglePurchaseAgreement, set_togglePurchaseAgreement] = useState(false); 

    const toggleAccount_func = () => {
      set_toggleAccount(!toggleAccount); 

      console.log(toggleAccount);
      console.log(toggleProfile);
      console.log(toggleShipping);
      console.log(toggleActivities);
      console.log(togglePurchaseAgreement);

      if (toggleProfile) {
        console.log('profile: ' + toggleProfile);
        set_toggleProfile(!toggleProfile); 
      }
      if (toggleShipping) {
        console.log('shipping: ' + toggleShipping);
        set_toggleShipping(!toggleShipping); 
      }
      if (toggleActivities) {
        console.log('activities: ' + toggleActivities);
        set_toggleActivities(!toggleActivities); 
      }
      if (togglePurchaseAgreement){
        console.log('purchase agreement: ' + togglePurchaseAgreement);
        set_togglePurchaseAgreement(!togglePurchaseAgreement);
      }
    }

    const toggleProfile_func = () => {
      set_toggleProfile(!toggleProfile); 

      if (toggleAccount) {
        set_toggleAccount(!toggleAccount); 
      }
      if (toggleShipping) {
        set_toggleShipping(!toggleShipping); 
      }
      if (toggleActivities) {
        set_toggleActivities(!toggleActivities); 
      }
      if (togglePurchaseAgreement){
        set_togglePurchaseAgreement(!togglePurchaseAgreement);
      }
    }


    const toggleShipping_func = () => {
      set_toggleShipping(!toggleShipping); 
      if (toggleAccount) {
        set_toggleAccount(!toggleAccount); 
      }
      if (toggleProfile) {
        set_toggleProfile(!toggleProfile); 
      }
      if (toggleActivities) {
        set_toggleActivities(!toggleActivities); 
      }
      if (togglePurchaseAgreement){
        set_togglePurchaseAgreement(!togglePurchaseAgreement);
      }
    }

    const toggleActivities_func = () => {
      set_toggleActivities(!toggleActivities); 
      if (toggleAccount) {
        set_toggleProfile(!toggleAccount); 
      }
      if (toggleProfile) {
        set_toggleProfile(!toggleProfile); 
      }
      if (toggleShipping) {
        set_toggleShipping(!toggleShipping); 
      }
      if (togglePurchaseAgreement){
        set_togglePurchaseAgreement(!togglePurchaseAgreement);
      }
    }

    const togglePurchaseAgreement_func = () => {      
    set_togglePurchaseAgreement(!togglePurchaseAgreement);
    if (toggleAccount) {
      set_toggleProfile(!toggleAccount); 
    }
    if (toggleProfile) {
      set_toggleProfile(!toggleProfile); 
    }
    if (toggleActivities) {
      set_toggleActivities(!toggleActivities); 
    }
    if (toggleShipping) {
      set_toggleShipping(!toggleShipping); 
    }
  }


    return (
        <div>
            <NavBar page={"buyerSettings"}/>
            
            <h1>Buyer Settings</h1>
            <div className="buyers-settings-wrapper">
              <ul className="buyers-selections">
                <li onClick={toggleAccount_func}>Account</li>
                <li onClick={toggleProfile_func}>Profile</li>
                <li onClick={toggleShipping_func}>Shipping</li>
                <li onClick={toggleActivities_func}>Activities</li>
                <li onClick={togglePurchaseAgreement_func}>Purchase Agreement</li>
              </ul>
              <div className="buyers-selection-area">
                {toggleAccount !== false ? <Account/> : null}
                {toggleProfile !== false ? <Profile/> : null}
                {toggleShipping !== false ? <Shipping/> : null}
                {toggleActivities !== false ? <Activities/> : null}
                {togglePurchaseAgreement !== false ? <PurchaseAgreement/> : null}
              </div>
            </div>
            
        </div>
    );
};


export default BuyerSettings;