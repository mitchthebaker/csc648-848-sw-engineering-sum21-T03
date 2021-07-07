import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductCreationForm from '../components/ProductCreationForm';
import Logo from './../components/Modules/Logo';

const Profile = () => {

    return (
        <div className="profile-wrapper">
            <header className="App-header">
                <Logo/>
                <h1>Profile</h1>
                <img className="Profile-Image" src="//:0" alt="Profile"/>
                <div className="App-header-Right">
                    <NavLink className="nav-link" to="/about"> About </NavLink>
                    <NavLink className="nav-link" to="/settings"> Settings </NavLink>
                    <NavLink className="nav-link" to="/userFeed"> User Feed </NavLink>
                </div>
            </header>

            <ProductCreationForm/>

            <div className="content-ProfilePage">
                <div className="FirstLastName-ProfilePage">
                    <p>FirstName LastName</p>
                </div>
                <div className="Information-ProfilePage">
                    <p>Infromation</p>
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