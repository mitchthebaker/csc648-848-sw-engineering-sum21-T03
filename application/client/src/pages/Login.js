import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="settings-wrapper">
            <NavLink className="nav-link" to="/"> Home </NavLink>
            <NavLink className="nav-link" to="/about"> About </NavLink>
            <NavLink className="nav-link" to="/profile"> Profile </NavLink>
            <h1>Login / Sign up</h1>  

            <form>
                <label>
                    <p>UserName</p>
                    <input type="text" name="userName-Login" required/>
                    <p>Password</p>
                    <input type="text" name="userName-Password" required/>
                </label>
                <input type="submit" value="Submit" name="Submit-Login"/>
            </form>
            
            <NavLink className="nav-link" to="/sign_up"> Sign Up </NavLink> 
        </div>
    );
};

export default Login;