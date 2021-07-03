import React from 'react';
import { NavLink } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="userFeed-wrapper">
            <header className="App-header">
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/about"> About </NavLink>
                <NavLink className="nav-link" to="/settings"> Settings </NavLink>
                <h1>User Feed</h1>
            </header>
        </div>
    );
};

export default Profile;