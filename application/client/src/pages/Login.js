import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="settings-wrapper">
            <NavLink className="nav-link" to="/"> Home </NavLink>
            <NavLink className="nav-link" to="/about"> About </NavLink>
            <NavLink className="nav-link" to="/profile"> Profile </NavLink>
            <h1 className="Login-Title">Login / Sign up</h1>  

            <div className="container-login">
                <form>
                    <label className="label-login">
                        <p>UserName</p>
                        <input type="text" name="userName-Login" required/>
                        <p>Password</p>
                        <input type="text" name="userName-Password" required/>
                        <input className="Submit-Login" type="submit" value="Submit" name="Submit-Login"/>
                    </label>
                </form>
                <div className="Sign-Up-LoginContainer">
                    <NavLink className="nav-link" to="/sign_up"> Sign Up </NavLink> 
                </div>
            </div>
        </div>
    );
};

export default Login;