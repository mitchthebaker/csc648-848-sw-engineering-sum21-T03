import React, {useState} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
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
import Profile from './Profile';
import Search from '../components/Modules/Search';
import { connect, useDispatch } from 'react-redux';
import {
  getProducts
} from '../redux/actions/productActions';


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


const Home = (props) => {

    const dispatch = useDispatch(); 
    const classes = styles();

    React.useEffect(() => {
        axios.get('/api/products')
            .then((res) => {
                dispatch(getProducts(res.data));
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    
    const filterProducts = (products, query) => {
      if(!query) {
        return products;
      }

      return products.filter((product) => {
        const productTitle = product.title.toLowerCase();
        return productTitle.includes(query);
      });
    };

    const filteredProducts = filterProducts(props.products, query);

    return <Router> {

      <ThemeProvider theme = {theme}>
      <NavBar />
      <Search />
      
      <div className={classes.wrapper}>
        <Typography variant="h5" className={classes.bigSpace} color="primary">
           At Jose's Angels, we buy and sell products
        </Typography>
        <Typography variant="h7" className={classes.littleSpace} color="primary">
          New kind of Marketplace bring people together for local as well as global sale of their stuff. Our Marketplace is on a mission to become the simplest, most trustworthy and fast buying and selling experience.
        </Typography>
      </div>

      {filteredProducts.map((product) => (
        <li key={product.product_id}> 
        
          { product.title } 
          { product.description }
          { product.price }
          <img
                src={`/uploads/${product.image}`}
                className="team-member-image"
                alt="Failed to load."
            />
        </li>
      ))}

      <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<AccountCircleIcon style={{fill: "#4360A6", height:"70", width:"70"} }/>} link="/profile" btnTitle="Profile"  />
          <Grid icon={<AddPhotoAlternateIcon style={{fill: "#449A76", height:"70", width:"70"}}/>} link="/profile" btnTitle="Post for Sell"/>
          <Grid icon={<ImageSearchIcon style={{fill: "#D05B2D", height:"70", width:"70"}}/>}  link="/profile" btnTitle="Buy"/>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>  
          <Grid icon={<AccountBalanceIcon style={{fill: "#5EA770", height:"70", width:"70"}}/>} link="/profile"  btnTitle="Payment"/>
          <Grid icon={<LocalShippingIcon style={{fill: "#E69426", height:"70", width:"70"}}/>} link="/profile"  btnTitle="Shipping"/>
          <Grid icon={<GavelIcon style={{fill: "#2EA09D", height:"70", width:"70"}}/>} link="/profile"  btnTitle="Policy"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>


            //         </div>
            //     </section>
            // </header>

           

            /* <p> {!data ? "Loading..." : data} </p> */
        /* </div> */
      } </Router>
};

function mapStateToProps(state) {
  return { products: state.productReducer.products };
}

export default connect(mapStateToProps)(Home);

/*
<SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
*/