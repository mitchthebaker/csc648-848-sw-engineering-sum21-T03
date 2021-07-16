import React from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from '../components/Modules/HamburgerMenu';
import ProductCreationForm from '../components/ProductCreationForm';

const Profile = () => {

    return (
        <div className="profile-wrapper">
            <header className="App-header">
                <HamburgerMenu />
                <h1>Profile</h1>
                <img className="Profile-Image" src="//:0" alt="Profile"/>
                <div className="App-header-Right">
                    <NavLink className="nav-link" to="/about"> About </NavLink>
                    <NavLink className="nav-link" to="/userFeed"> User Feed </NavLink>
                    <NavLink className="nav-link" to="/seller-settings">Seller Settings</NavLink>
                    <NavLink className="nav-link" to="/buyer-settings">Buyer Settings</NavLink>

                </div>
            </header>

            <ProductCreationForm/>

            <div className="content-ProfilePage">
                <div className="FirstLastName-ProfilePage">
                    <p>Firstname Lastname</p>
                </div>
                <div className="Information-ProfilePage">
                    <p>Information</p>
                </div>
                <div className="Section-ProfilePage">
                    <p>Section</p>
                </div>
                <div className="Activities-ProfilePage">
                    <p>Activities</p>
                </div>
                <div className="TopRecommendations-ProfilePage">
                    <p>Top Recommendations</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;