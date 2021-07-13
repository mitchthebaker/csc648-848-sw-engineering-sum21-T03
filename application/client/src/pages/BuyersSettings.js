import React, {useEffect, useState} from 'react';
import Logo from '../components/Modules/Logo';
import NavBar from '../components/Modules/NavBar';
import ProductCreationForm from '../components/ProductCreationForm';
import AccountBuyers from '../components/BuyersSettingComponents/Account'; 
import ActivitiesBuyers from '../components/BuyersSettingComponents/Activities';
import ProfileBuyers from '../components/BuyersSettingComponents/Profile';
import ShippingBuyers from '../components/BuyersSettingComponents/Shipping';


import { connect, useDispatch } from 'react-redux';


const BuyerSettings = (props) => {

    // test comment for showing multiple commits in a pull request 

    const [toggleAccount, set_toggleAccount] = useState(false); 
    const [toggleProfile, set_toggleProfile] = useState(false); 
    const [toggleProducts, set_toggleProducts] = useState(false); 
    const [toggleShipping, set_toggleShipping] = useState(false); 
    const [toggleActivities, set_toggleActivities] = useState(false); 

    const toggleAccount_func = () => {
      toggleAccount? set_toggleAccount(false) : set_toggleAccount(true); 
    }

    const toggleProfile_func = () => {
      toggleProfile? set_toggleProfile(false) : set_toggleProfile(true); 
    }

    const toggleProducts_func = () => {
      toggleProducts? set_toggleProducts(false) : set_toggleProducts(true); 
    }

    const toggleShipping_func = () => {
      toggleShipping? set_toggleShipping(false) : set_toggleShipping(true); 
    }

    const toggleActivities_func = () => {
      toggleActivities? set_toggleActivities(false) : set_toggleActivities(true); 
    }


    return (
        <div>
            <NavBar/>  
            <h1>Buyer Settings</h1>
            <div className="buyers-settings-wrapper">
              <ul className="buyers-selections">
                <li onClick={toggleProfile_func}>Profile</li>
                <li onClick={toggleProducts_func}>Products</li>
                <li onClick={toggleAccount_func}>Account</li>
                <li onClick={toggleShipping_func}>Shipping</li>
                <li onClick={toggleActivities_func}>Activities</li>
              </ul>
              <div className="buyers-selection-area">
                {toggleAccount? <AccountBuyers/> : null}
                {toggleProfile? <ProfileBuyers/> : null}
                {toggleProducts? <ProductCreationForm/> : null}
                {toggleShipping? <ShippingBuyers/> : null}
                {toggleActivities? <ActivitiesBuyers/> : null}
              </div>
            </div>
            
        </div>
    );
};

//issue getting a buyerSettingsReducer
function mapStateToProps(state) {
    return { 
      displayProducts: state.sellerSettingsReducer.displayProducts
    };
  }

export default connect(mapStateToProps)(BuyerSettings);