import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    setUsername,
    setPassword,
    setConfirmPassword
} from '../redux/actions/registerActions';

const Register = () => {

    const dispatch = useDispatch();
    const registerUsername = useSelector((state) => state.registerReducer.username);
    const registerPassword = useSelector((state) => state.registerReducer.password);
    const registerConfirmPassword = useSelector((state) => state.registerReducer.confirmPassword);

    return (
        <div className="settings-wrapper">
            <NavLink className="nav-link" to="/"> Home </NavLink>
            <NavLink className="nav-link" to="/about"> About </NavLink>
            <NavLink className="nav-link" to="/profile"> Profile </NavLink>
            <h1 className="SignUp-Title">Register</h1>  

            <form className="container-Sign_Up">
                <p>Username</p>
                <input type="text" placeholder="Username" autoComplete="username" value={registerUsername} onChange={(e) => dispatch(setUsername(e.target.value))} required/>
                
                <p>Password</p>
                <input type="password" autoComplete="new-password" placeholder="Password" value={registerPassword} onChange={(e) => dispatch(setPassword(e.target.value))} required/>
                
                <p>Confirm Password</p>
                <input type="password" autoComplete="new-password" placeholder="Confirm Password" value={registerConfirmPassword} onChange={(e) => dispatch(setConfirmPassword(e.target.value))} required/>
                <button className="Submit-SignUp"> Register </button>
            </form>
        </div>
    );
};

export default Register;