import React from 'react';
import CustomBtn from './CustomBtn';
import logo from '../../logo.svg-20210623T140909Z-001/angels.png';
import {Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",  
    },
    logo: {
        width: "5%", 
    },
    
    menuItem: {
        cursor: "pointer", 
        paddingLeft: "65px",
        paddingRight: "65px",
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"

        },
    }
})

function NavBar() {
    const classes = styles()
    return (
        <div className="navbar">   
            <img src={logo} className="nav-img" alt="Dropsell Logo"/>
    
            <div className="navigation-icons">
                <NavLink className="nav-link" to="/settings">
                    <span> Settings </span>
                </NavLink>
                <NavLink className="nav-link" to="/about">
                    <span> Social Media </span> 
                </NavLink>
                <NavLink className="nav-link" to="/about"> 
                    <span> About </span>
                </NavLink>
                <NavLink className="nav-link" to="/">
                    <span> Home </span>
                </NavLink>
                <NavLink className="nav-link" to="/login">
                    <CustomBtn txt="Login"/> 
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;
