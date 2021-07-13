import React, {useEffect, useState} from 'react';
import Logo from '../components/Modules/Logo';
import NavBar from '../components/Modules/NavBar';
import ProductCreationForm from '../components/ProductCreationForm';
import { connect, useDispatch } from 'react-redux';
import AccountSellers from '../components/SellersSettingComponents/Account'; 
import ActivitiesSellers from '../components/SellersSettingComponents/Activities';
import ProfileSellers from '../components/SellersSettingComponents/Profile';
import WorkScheduleSellers from '../components/SellersSettingComponents/WorkSchedule';

const SellerSettings = (props) => {

    // test comment for showing multiple commits in a pull request 

    const [toggleAccount, set_toggleAccount] = useState(false); 
    const [toggleProfile, set_toggleProfile] = useState(false); 
    const [toggleProducts, set_toggleProducts] = useState(false); 
    const [toggleWorkSchedule, set_toggleWorkSchedule] = useState(false); 
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

    const toggleWorkSchedule_func = () => {
      toggleWorkSchedule? set_toggleWorkSchedule(false) : set_toggleWorkSchedule(true); 
    }

    const toggleActivities_func = () => {
      toggleActivities? set_toggleActivities(false) : set_toggleActivities(true); 
    }

    return (
        <div>
            <NavBar/>  
            <h1>Seller Settings</h1>
            <div className="seller-settings-wrapper">
              <ul className="seller-selections">
                <li onClick={toggleProfile_func}>Profile</li>
                <li onClick={toggleProducts_func}>Products</li>
                <li onClick={toggleAccount_func}>Account</li>
                <li onClick={toggleWorkSchedule_func}>Work Schedule</li>
                <li onClick={toggleActivities_func}>Activities</li>
              </ul>
              <div className="seller-selection-area">
                {toggleAccount? <AccountSellers/> : null}
                {toggleProfile? <ProfileSellers/> : null}
                {toggleProducts? <ProductCreationForm/> : null}
                {toggleWorkSchedule? <WorkScheduleSellers/> : null}
                {toggleActivities? <ActivitiesSellers/> : null}

                { props.displayProducts }
              </div>
            </div>
            
        </div>
    );
};

function mapStateToProps(state) {
    return { 
      displayProducts: state.sellerSettingsReducer.displayProducts
    };
  }

export default connect(mapStateToProps)(SellerSettings);