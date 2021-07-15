import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
    setUsername,
    setPassword,
    setConfirmPassword,
    setTOS,
    createUser
} from '../redux/actions/registerActions';

const Register = (props) => {

    // dispatch state data back to redux 
    const dispatch = useDispatch();
    const registerUsername = useSelector((state) => state.registerReducer.username);
    const registerPassword = useSelector((state) => state.registerReducer.password);
    const registerConfirmPassword = useSelector((state) => state.registerReducer.confirmPassword);
    const termsOfServices = useSelector((state) => state.registerReducer.termsOfServices);

    const submitHandler = () => {
        dispatch(createUser());
    };

    if(props.registered) {
        return (
            <Redirect to={{ pathname: "/login" }}/>
        );
    }
    else {
        return (
            <div className="settings-wrapper">
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/about"> About </NavLink>
                <NavLink className="nav-link" to="/profile"> Profile </NavLink>
                <h1 className="SignUp-Title">Register</h1>  
    
                <div className="container-Sign_Up">
                    <p>Username</p>
                    <input type="text" placeholder="Username" autoComplete="username" value={registerUsername} onChange={(e) => dispatch(setUsername(e.target.value))} required/>
                    
                    <p>Password</p>
                    <input type="password" autoComplete="new-password" placeholder="Password" value={registerPassword} onChange={(e) => dispatch(setPassword(e.target.value))} required/>
                    
                    <p>Confirm Password</p>
                    <input type="password" autoComplete="new-password" placeholder="Confirm Password" value={registerConfirmPassword} onChange={(e) => dispatch(setConfirmPassword(e.target.value))} required/>

                    <p> Terms of Services and Privacy Agreement</p>
                    <input type="checkbox" id="Terms of Services" name="terms" value={termsOfServices} onChange={(e) => dispatch(setTOS(e.target.value))} required />

                    <button className="Submit-SignUp" onClick={submitHandler}> Register </button>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return { registered: state.registerReducer.registered };
}

export default connect(mapStateToProps)(Register);