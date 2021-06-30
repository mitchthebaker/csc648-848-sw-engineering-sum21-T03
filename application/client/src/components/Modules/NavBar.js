import React from 'react';
import CustomBtn from './CustomBtn';
import logo from '../../logo.svg-20210623T140909Z-001/angels.png';
import {Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "5%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                {/* <img src={logoMobile} className={classes.logoMobile}/>  */}
                <Typography variant="h6" className={classes.menuItem}>
                   Search
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Social Media
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Shipping
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                   About Jose's Angels
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Typography>
                <CustomBtn txt="Product Categories"/>
            </Toolbar>
    )
}

export default NavBar
