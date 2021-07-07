import React from 'react';
import CustomBtn from './CustomBtn';
import logo from '../../logo.svg-20210623T140909Z-001/angels.png';
import {Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Search from './Search';

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
        paddingLeft: "75px",
        paddingRight: "75px",
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"

        },
    }
})

function NavBar() {
    const classes = styles()
    return (
        <Toolbar position = "sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                 
                {/* <img src={logo} className={classes.logo} alt="Dropsell Logo"/> */}
                
                <Typography variant="h6" className={classes.menuItem}>
                Social Media
                </Typography> 

        <div className="navbar">   
            <div className="navigation-icons">
                <NavLink className="nav-link" to="/settings">
                    <span> Settings </span>
                </NavLink>

                <NavLink className="nav-link" to="/about"> <Typography variant="h6" className={classes.menuItem}>
                About Dropsell
                </Typography> </NavLink>
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
