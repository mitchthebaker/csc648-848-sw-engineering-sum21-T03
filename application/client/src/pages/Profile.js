import React from 'react';
import { NavLink } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="profile-wrapper">
            <header className="App-header">
                <h1>Profile</h1>
                <img className="Profile-Image" src="//:0"></img>
                <NavLink className="nav-link" to="/"> Home </NavLink>
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