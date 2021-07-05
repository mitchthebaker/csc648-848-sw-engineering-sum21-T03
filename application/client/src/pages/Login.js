import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import Logo from './../components/Modules/Logo';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
    setUsername,
    setPassword,
    loginUser
} from '../redux/actions/loginActions';

const Login = (props) => {

    // dispatch state data back to redux 
    const dispatch = useDispatch();
    const loginUsername = useSelector((state) => state.loginReducer.username);
    const loginPassword = useSelector((state) => state.loginReducer.password);

    const loginHandler = () => {
        dispatch(loginUser());
    };

    if(props.loggedIn) {
        return (
            <Redirect to={{ pathname: "/profile" }}/>
        );
    }
    else {
        return (
            <div className="settings-wrapper">
                <Logo />
                <h2 className="Login-Title">Login / Sign up</h2>  
                
                <div className="container-login">
                        <label className="label-login">
                            <p>UserName</p>
                            <input type="text" placeholder="Username" value={loginUsername} onChange={(e) => dispatch(setUsername(e.target.value))} required/>
                            <p>Password</p>
                            <input type="password"  placeholder="Password" value={loginPassword} onChange={(e) => dispatch(setPassword(e.target.value))} required/>
                            <button onClick={loginHandler}>Log In</button> 
                        </label>
                </div> 
                <div className="Sign-Up-LoginContainer">
                    <p>Don't Have an Account? Sign Up Now!  
                    <NavLink className="nav-link" to="/register"> <button>  Sign Up </button> </NavLink> 
                   </p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { loggedIn: state.loginReducer.loggedIn };
}

export default connect(mapStateToProps)(Login);