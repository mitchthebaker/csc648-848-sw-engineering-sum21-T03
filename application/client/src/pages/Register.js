import React from 'react';
import { Redirect, NavLink} from 'react-router-dom';
import TOS from '../components/TOS';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
    setFirstname,
    setLastname,
    setEmail,
    setUsername,
    setPassword,
    setConfirmPassword,
    setTOS,
    createUser,
    setDriversLicense
} from '../redux/actions/registerActions';
import HamburgerMenu from '../components/Modules/HamburgerMenu';


const Register = (props) => {

    // dispatch state data back to redux
    const dispatch = useDispatch();
   
    const registerFirstname = useSelector((state) => state.registerReducer.firstname);
    const registerLastname = useSelector((state) => state.registerReducer.lastname);
    const registerEmail = useSelector((state) => state.registerReducer.email);
    const registerUsername = useSelector((state) => state.registerReducer.username);
    const registerPassword = useSelector((state) => state.registerReducer.password);
    const registerConfirmPassword = useSelector((state) => state.registerReducer.confirmPassword);
    const registerDriversLicense = useSelector((state) => state.registerReducer.driversLicense);
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
                {/* <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/about"> About </NavLink>
                <NavLink className="nav-link" to="/profile"> Profile </NavLink> */}
                <HamburgerMenu />
                <h1 className="SignUp-Title">Register</h1>  
   
                <div className="container-Sign_Up">
                    <p>First Name</p>
                    <input tyep="text" placeholder="First name" autoComplete="First Name" value={registerFirstname} onChange={(e) => dispatch(setFirstname(e.target.value))} required/>

                    <p>Last Name</p>
                    <input tyep="text" placeholder="Last name" autoComplete="Last Name" value={registerLastname} onChange={(e) => dispatch(setLastname(e.target.value))} required/>

                    <p>Email</p>
                    <input tyep="text" placeholder="Email Address" autoComplete="Email" value={registerEmail} onChange={(e) => dispatch(setEmail(e.target.value))} required/>

                    <p>Username</p>
                    <input type="text" placeholder="Username" autoComplete="username" value={registerUsername} onChange={(e) => dispatch(setUsername(e.target.value))} required/>
                   
                    <p>Password</p>
                    <input type="password" autoComplete="new-password" placeholder="Password" value={registerPassword} onChange={(e) => dispatch(setPassword(e.target.value))} required/>
                   
                    <p>Confirm Password</p>
                    <input type="password" autoComplete="new-password" placeholder="Confirm Password" value={registerConfirmPassword} onChange={(e) => dispatch(setConfirmPassword(e.target.value))} required/>


                    <p> <b>Terms of Services and Privacy Agreement</b></p>
                    <TOS/>
                    <input type="checkbox" id="Terms of Services" name="terms" value={termsOfServices} onChange={(e) => dispatch(setTOS(e.target.value))} required />

                    <p>Only enter if signing up as a Seller</p>

                    <p>Drivers License</p>
                    <input type="text" autoComplete="DL#" placeholder="Drivers License" value={registerDriversLicense} onChange={(e) => dispatch(setDriversLicense(e.target.value))} required/>
                   
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