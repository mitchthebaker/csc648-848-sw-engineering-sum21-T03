import React, {useEffect, useState} from 'react';
import Logo from '../components/Modules/Logo';
import NavBar from '../components/Modules/NavBar';
import ProductCreationForm from '../components/ProductCreationForm';
import Account from '../components/BuyersSettingComponents/Account'; 
import Activities from '../components/BuyersSettingComponents/Activities';
import Profile from '../components/BuyersSettingComponents/Profile';
import Shipping from '../components/BuyersSettingComponents/Shipping';


import { connect, useDispatch } from 'react-redux';


const BuyerSettings = (props) => {

    // test comment for showing multiple commits in a pull request 

    const [toggleAccount, set_toggleAccount] = useState(false); 
    const [toggleProfile, set_toggleProfile] = useState(false); 
    const [toggleProducts, set_toggleProducts] = useState(false); 
    const [toggleShipping, set_toggleShipping] = useState(false); 
    const [toggleActivities, set_toggleActivities] = useState(false); 

    const toggleAccount_func = () => {
      set_toggleAccount(!toggleAccount); 

      console.log(toggleAccount);
      console.log(toggleProfile);
      console.log(toggleProducts);
      console.log(toggleShipping);
      console.log(toggleActivities);

      if (toggleProfile) {
        console.log('profile: ' + toggleProfile);
        set_toggleProfile(!toggleProfile); 
      }
      if (toggleProducts) {
        console.log('products: ' + toggleProducts);
        set_toggleProducts(!toggleProducts); 
      }
      if (toggleShipping) {
        console.log('shipping: ' + toggleShipping);
        set_toggleShipping(!toggleShipping); 
      }
      if (toggleActivities) {
        console.log('activities: ' + toggleActivities);
        set_toggleActivities(!toggleActivities); 
      }
    }

    const toggleProfile_func = () => {
      set_toggleProfile(!toggleProfile); 

      if (toggleAccount) {
        set_toggleAccount(!toggleAccount); 
      }
      if (toggleProducts) {
        set_toggleProducts(!toggleProducts); 
      }
      if (toggleShipping) {
        set_toggleShipping(!toggleShipping); 
      }
      if (toggleActivities) {
        set_toggleActivities(!toggleActivities); 
      }
    }

    const toggleProducts_func = () => {
      set_toggleProducts(!toggleProducts); 

      if (toggleAccount) {
        set_toggleAccount(!toggleAccount); 
      }
      if (toggleProfile) {
        set_toggleProfile(!toggleProfile); 
      }
      if (toggleShipping) {
        set_toggleShipping(!toggleShipping); 
      }
      if (toggleActivities) {
        set_toggleActivities(!toggleActivities); 
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
      if (toggleProducts) {
        set_toggleProducts(!toggleProducts); 
      }
      if (toggleActivities) {
        set_toggleActivities(!toggleActivities); 
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
      if (toggleProducts) {
        set_toggleProducts(!toggleProducts); 
      }
      if (toggleShipping) {
        set_toggleShipping(!toggleShipping); 
      }
    }


    return (
        <div>
            <NavBar/>  
            <h1>Buyer Settings</h1>
            <div className="buyers-settings-wrapper">
              <ul className="buyers-selections">
                <li onClick={toggleAccount_func}>Account</li>
                <li onClick={toggleProfile_func}>Profile</li>
                <li onClick={toggleProducts_func}>Products</li>
                <li onClick={toggleShipping_func}>Shipping</li>
                <li onClick={toggleActivities_func}>Activities</li>
              </ul>
              <div className="buyers-selection-area">
                {toggleAccount !== false ? <Account/> : null}
                {toggleProfile !== false ? <Profile/> : null}
                {toggleProducts !== false ? <ProductCreationForm/> : null}
                {toggleShipping !== false ? <Shipping/> : null}
                {toggleActivities !== false ? <Activities/> : null}
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