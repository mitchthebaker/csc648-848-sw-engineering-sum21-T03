import React, { useState } from 'react';
import CustomBtn from './CustomBtn';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="navbar">   
            <div className="navigation-icons">
                <NavLink className="nav-link" to="/about"> About </NavLink>
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/login">
                <CustomBtn txt="Login"/> 
                </NavLink>

            </div>
        </div>
    );
};

export default NavBar;
