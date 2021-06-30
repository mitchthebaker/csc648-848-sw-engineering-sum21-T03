import React from 'react';
import { NavLink } from 'react-router-dom';

const Sign_Up = () => {
    return (
        <div className="settings-wrapper">
            <NavLink className="nav-link" to="/"> Home </NavLink>
            <NavLink className="nav-link" to="/about"> About </NavLink>
            <NavLink className="nav-link" to="/profile"> Profile </NavLink>
            <h1>Sign Up</h1>  


            <form>
                <label>
                    <p>First name</p>
                    <input type="text" name="firstName-SignUp" required/>
                    <p>Last name</p>
                    <input type="text" name="lastName-SignUp" required/>
                    <p>Email</p>
                    <input type="text" name="email-SignUp" required/>
                    <h1>Select: </h1>
                    <p>Buyer</p>
                    <input type="checkbox" name="Buyer-Select-SignUp"/>
                    <p>Seller</p>
                    <input type="checkbox" name="Seller-Select-SignUp"/>
                </label>
                <input type="submit" value="Submit" name="Submit-SignUp"/>
            </form>
        </div>
    );
};

export default Sign_Up;