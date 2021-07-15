import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Menu, Typography} from '@material-ui/core';
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
import HamburgerMenu from '../components/Modules/HamburgerMenu';
// import Menu from '../components/Modules/Menu';
import { connect, useDispatch } from 'react-redux';
import {
  getProducts
} from '../redux/actions/productActions';
import { Component } from 'react';


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
    
    const [isOpen, setOpen] = useState(false);


    const dispatch = useDispatch(); 
    const classes = styles();

    useEffect(() => {
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

    return (

      <ThemeProvider theme = {theme}>
        
        <NavBar/>

        

{/* 
<div className='menu-row'>
				<HamburgerMenu
					isOpen={this.state.open[3]}
					menuClicked={this.handleClick.bind(this, 3)}
					width={18}
					height={15}
					strokeWidth={1}
					rotate={0}
					color='black'
					borderRadius={0}
					animationDuration={0.5}
				/>
			  <HamburgerMenu
		      isOpen={this.state.open[0]}
		      menuClicked={this.handleClick.bind(this, 0)}
		      width={36}
					height={30}
					strokeWidth={2}
					rotate={0}
		      color='black'
					borderRadius={5}
		      animationDuration={0.3}
		    />
				<HamburgerMenu
					isOpen={this.state.open[1]}
					menuClicked={this.handleClick.bind(this, 1)}
					width={54}
					height={45}
					strokeWidth={3}
					rotate={0}
					color='black'
					borderRadius={5}
					animationDuration={0.4}
				/>
				<HamburgerMenu
					isOpen={this.state.open[2]}
					menuClicked={this.handleClick.bind(this, 2)}
					width={72}
					height={60}
					strokeWidth={3}
					rotate={0}
					color='black'
					borderRadius={5}
					animationDuration={0.75}
				/>
			</div> */}
    

   













        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        
        <div className={classes.wrapper}>
          <Typography variant="h5" className={classes.bigSpace} color="primary">
             At Dropsell, we buy and sell products
          </Typography>
          <Typography variant="h7" className={classes.littleSpace} color="primary">
            New kind of Marketplace bring people together for local as well as global sale of their stuff. Our Marketplace is on a mission to become the simplest, most trustworthy and fast buying and selling experience.
          </Typography>
        </div>

        <div className="searchable-product-list">
          {filteredProducts.map((product) => (
            <li className="product-wrapper" key={product.product_id}> 
              <div className="product-title-price">
                <h3> { product.title }  </h3>
                <h5> { product.price } </h5>
              </div>
              <div className="product-desc-title">
                <h5> { product.description } </h5>
              </div>

              <img  
                    src={`/uploads/${product.image}`}
                    className="product-image"
                    alt="Failed to load."
                />
            </li>
          ))}
        </div>

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
    );
};

function mapStateToProps(state) {
  return { products: state.productReducer.products };
}

export default connect(mapStateToProps)(Home);

/*
<SearchBar 
      />
*/