import React , {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/Modules/NavBar';
import Footer from '../components/Modules/Footer'
import { connect, useDispatch} from 'react-redux';


import axios from "axios"; 
import {
    getUserProfile, 
} from '../redux/actions/loginActions';

const Profile = (props) => {



    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getUserProfile());
      }, []);


    return (
        <div className="profile-wrapper">
            <NavBar page={"Profile"}/>  
            {
                /*
                <header className="App-header">
                    <HamburgerMenu />
                    <h1>Profile</h1>
                    <img className="Profile-Image" src="//:0" alt="Profile"/>
                    <div className="App-header-Right">
                        <NavLink className="nav-link" to="/about"> About </NavLink>
                        <NavLink className="nav-link" to="/userFeed"> User Feed </NavLink>
                        <NavLink className="nav-link" to="/seller-settings">Seller Settings</NavLink>
                        <NavLink className="nav-link" to="/buyer-settings">Buyer Settings</NavLink>

                    </div>
                </header>
                */
            }

            <header className="Profile-header">
                <div className="firstHeaderContainerProfile">

                </div>
                <div className="secondHeaderContainerProfile">
                    <img className="ProfileAvatar" src="https://i.redd.it/jgvvyif33u541.jpg"/>
                </div>
            </header>
            <div className="content-ProfilePage">
                <div className="FirstLastName-ProfilePage">
                    <h3>{props.first_name + " " + props.last_name}</h3>
                </div>
                <div className="Information-ProfilePage">
                    <p>Information</p>
                    <h3>{props.bioDescription}</h3>
                </div>
                <div className="Section-ProfilePage">
                    <p>Location</p>
                    <h3>{props.location}</h3>
                </div>
                <div className="Activities-ProfilePage">
                    <p>Activities</p>
                </div>
                <div className="TopRecommendations-ProfilePage">
                    <p>Social Media</p>
                    <h3>{props.socialMedia}</h3>
                </div>
            </div>
            <Footer />
        </div>
    );
};

function mapStateToProps(state) {
    return { 
        first_name: state.loginReducer.first_name,
        last_name: state.loginReducer.last_name,
        bioDescription: state.loginReducer.bioDescription, 
        location: state.loginReducer.location, 
        socialMedia: state.loginReducer.socialMedia
    };
}

export default connect(mapStateToProps)(Profile);