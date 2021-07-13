import React from 'react';
import Logo from '../components/Modules/Logo';
import NavBar from '../components/Modules/NavBar';
import ProductCreationForm from '../components/ProductCreationForm';
import { connect, useDispatch } from 'react-redux';

const BuyerSettings = (props) => {

    // test comment for showing multiple commits in a pull request 

    return (
        <div>
            <NavBar/>  
            <h1>Buyer Settings</h1>
            <div className="buyers-settings-wrapper">
              <ul className="buyers-selections">
                <li>Profile</li>
                <li>Products</li>
                <li>Account</li>
                <li>Shipping</li>
                <li>Activities</li>
              </ul>
              <div className="buyers-selection-area">
              { props.displayProducts }
              <ProductCreationForm/>
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