import React, { useState } from 'react';
import CustomBtn from './CustomBtn';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import HamburgerMenu from './HamburgerMenu';


const NavBar = () => {
    /* <img src={logo} className={classes.logo} alt="Dropsell Logo"/> */
  
    return (
        <div className="navbar">   
            <div className="navigation-icons">
                <NavLink className="nav-link" to="/settings"> Settings </NavLink>
                <NavLink className="nav-link" to="/about"> About </NavLink>
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/login">
                    <CustomBtn txt="Login"/> 
                </NavLink>
                <HamburgerMenu />
            </div>
        </div>
    );
};

export default NavBar;
