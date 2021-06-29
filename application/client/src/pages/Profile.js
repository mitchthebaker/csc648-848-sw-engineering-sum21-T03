import React from 'react';
import { NavLink } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="profile-wrapper">
            <header className="App-header">
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/about"> About </NavLink>
                <NavLink className="nav-link" to="/settings"> Settings </NavLink>
                <NavLink className="nav-link" to="/userFeed"> User Feed </NavLink>
                <h1>Profile page</h1>
            </header>
            <p>Information</p>
            <div className="Profile-containerSide-One">
                <p>Bio Description</p>
                <p>Rate of this website</p>
                <p>Review of this website</p>
                <p>Social Media Connect</p>
            </div>

            
        </div>
    );
};

export default Profile;