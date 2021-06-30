import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import NavBar from '../components/Modules/NavBar';
import Grid from '../components/Modules/Grid';
import Footer from '../components/Modules/Footer'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import GavelIcon from '@material-ui/icons/Gavel';


const theme = createMuiTheme({
    palette: {
      primary: {
        main:"#2e1667",
      },
      secondary: {
        main:"#c7d8ed",
      },
    },
    typography: {
      fontFamily: [
        'Roboto'
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '2rem',
        },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      },
    },
  });
  
  const styles = makeStyles({
    wrapper: {
      width: "50%",
      margin: "auto",
      textAlign: "center"
    },
    bigSpace: {
      marginTop: "2.0rem"
    },
    littleSpace:{
      marginTop: "2.0rem",
    },
    grid:{
      display: "flex", 
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap", 
    },
  })


const Home = () => {

    const [data, setData] = React.useState(null);
    const classes = styles();

    React.useEffect(() => {
        axios.get('/api')
            .then((res) => {
                setData(res.data.message);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return (
        <div className="home-wrapper">
            <header className="App-header">
                <section className="navigation">
                    <h1> Home </h1>
                    <div className="navigation-links">
                        <NavLink className="nav-link" to="/"> Home </NavLink>
                        <NavLink className="nav-link" to="/about"> About </NavLink>
                        <NavLink className="nav-link" to="/profile"> Profile </NavLink>
                        <NavLink className="nav-link" to="/login"> Login </NavLink>

                        <ThemeProvider theme = {theme}>
      <NavBar />

      <div className={classes.wrapper}>
          <Typography variant="h5" className={classes.bigSpace} color="primary">
             At Jose's Angels, we buy and sell products
          </Typography>
          <Typography variant="h7" className={classes.littleSpace} color="primary">
            New kind of Marketplace bring people together for local as well as global sale of their stuff. Our Marketplace is on a mission to become the simplest, most trustworthy and fast buying and selling experience.
          </Typography>
        </div>

      <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid item xs zeroMinWidth icon={<AccountCircleIcon style={{fill: "#4360A6", height:"70", width:"70"} }/>}  btnTitle="Login" />
          <Grid item xs zeroMinWidth icon={<AddPhotoAlternateIcon style={{fill: "#449A76", height:"70", width:"70"}}/>}  btnTitle="Post for Sell"/>
          <Grid item xs zeroMinWidth icon={<ImageSearchIcon style={{fill: "#D05B2D", height:"70", width:"70"}}/>}   btnTitle="Buy"/>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>  
          <Grid item xs zeroMinWidth icon={<AccountBalanceIcon style={{fill: "#5EA770", height:"70", width:"70"}}/>}   btnTitle="Payment"/>
          <Grid item xs zeroMinWidth icon={<LocalShippingIcon style={{fill: "#E69426", height:"70", width:"70"}}/>}   btnTitle="Shipping"/>
          <Grid item xs zeroMinWidth icon={<GavelIcon style={{fill: "#2EA09D", height:"70", width:"70"}}/>}  btnTitle="Policy"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>


                    </div>
                </section>
            </header>

           

            {/* <p> {!data ? "Loading..." : data} </p> */}
        </div>
    );
};

export default Home;