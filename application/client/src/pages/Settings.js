import React from 'react';
import Logo from '../components/Modules/Logo';

const Settings = () => {
    return (
        <div className="settings-wrapper">
            {/* <NavLink className="nav-link" to="/"> Home </NavLink>
            <NavLink className="nav-link" to="/about"> About </NavLink>
            <NavLink className="nav-link" to="/profile"> Profile </NavLink> */}
            <Logo/>
            <h1>Settings</h1>   
        </div>
    );
};

export default Settings;