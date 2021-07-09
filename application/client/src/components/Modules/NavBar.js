import React from 'react';
import CustomBtn from './CustomBtn';
//import {makeStyles} from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
/*import Search from './Search';
import logo from '../../logo.svg-20210623T140909Z-001/angels.png';
import {Toolbar, Typography} from '@material-ui/core';*/

/*const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",  
    },
    logo: {
        width: "5%", 
    },
    
    menuItem: {
        cursor: "pointer", 
        paddingLeft: "75px",
        paddingRight: "75px",
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"

        },
    }
})*/

const NavBar = () => {
    //const classes = styles();
    /* <img src={logo} className={classes.logo} alt="Dropsell Logo"/> */
    return (
        <div className="navbar">   
            <div className="navigation-icons">
                <NavLink className="nav-link" to="/settings"> Settings </NavLink>
                <NavLink className="nav-link" to="/about"> About </NavLink>
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/login">
                    <CustomBtn txt="Login"/> 
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;
