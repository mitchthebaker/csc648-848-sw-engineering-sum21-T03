import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import NavBar from '../components/Modules/NavBar';
import Footer from '../components/Modules/Footer'
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

    //searchbar
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    //searchbar filter
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
    <ThemeProvider className="home-wrapper" theme = {theme}>
    {/* {open ? closeIcon : hamburgerIcon}
    {open && <NavBar/>} */}

    <NavBar page={"Home"}/>
       
    <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

    {/* homepage header     */}
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
    <img  
    src={`/uploads/${product.image}`}
    className="product-image"
    alt="Failed to load."
    />
    <div className="product-title-creator">
    <h3 className="product-title"> { product.title }  </h3>
    <h4 className="product-creator"> Created by <span> {product.creator} </span> </h4>
    </div>
    <div className="product-price-rating-purchases">
      <div className="price-rating-purchases">
        <h5 className="product-price"> $ <span> { product.price } </span> </h5>
        <h5> Purchases: <span> 5 </span> </h5>
      </div>
      <div className="purchase-product-wrapper">
        <button className="purchase-product-button"> Purchase </button>
      </div>
    </div>
    </li>
    ))}
    </div>

    {/* homepage grid layout     
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
    </div>*/}
    <Footer/>
    </ThemeProvider>
    );
};

function mapStateToProps(state) {
return { products: state.productReducer.products };
}

export default connect(mapStateToProps)(Home);
