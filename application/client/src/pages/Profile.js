import React from 'react';
import { NavLink } from 'react-router-dom';
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
            
        </div>
    );
};

export default Profile;