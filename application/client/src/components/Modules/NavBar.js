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
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                 
                <img src={logo} className={classes.logo} alt="Dropsell Logo"/>
        
                <NavLink className="nav-link" to="/settings">
                <Typography variant="h6" className={classes.menuItem}>
                 Settings 
                </Typography> 
                </NavLink>
                <NavLink className="nav-link" to="/about">
                <Typography variant="h6" className={classes.menuItem}>
                Social Media
                </Typography> </NavLink>

                <NavLink className="nav-link" to="/about"> <Typography variant="h6" className={classes.menuItem}>
                About Jose's Angels
                </Typography> </NavLink>
                <NavLink className="nav-link" to="/">
                <Typography variant="h6" className={classes.menuItem}>
                Home
                </Typography> </NavLink>

                <NavLink className="nav-link" to="/login"><CustomBtn txt="Login"/> </NavLink>
            </Toolbar>
    )
}

export default NavBar
