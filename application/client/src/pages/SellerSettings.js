import React from 'react';
import Logo from '../components/Modules/Logo';
import NavBar from '../components/Modules/NavBar';
import ProductCreationForm from '../components/ProductCreationForm';
import { connect, useDispatch } from 'react-redux';

const SellerSettings = (props) => {

    // test comment for showing multiple commits in a pull request 

    return (
        <div>
            <NavBar/>  
            <div className="seller-settings-wrapper">
              <ul className="seller-selections">
                <li>Profile</li>
                <li>Products</li>
                <li>Account</li>
                <li> Work Schedule </li>
                <li>Activities</li>
              </ul>
              <div className="seller-selection-area">
              { props.displayProducts }
              <ProductCreationForm/>
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