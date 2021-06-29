import React from 'react';
import { NavLink } from 'react-router-dom';

const Sign_Up = () => {
    return (
        <div className="settings-wrapper">
            <NavLink className="nav-link" to="/"> Home </NavLink>
            <NavLink className="nav-link" to="/about"> About </NavLink>
            <NavLink className="nav-link" to="/profile"> Profile </NavLink>
            <h1>Sign Up</h1>  
        </div>
    );
};

export default Sign_Up;