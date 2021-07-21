import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Checkbox, Typography} from '@material-ui/core';
import NavBar from '../components/Modules/NavBar';
import Footer from '../components/Modules/Footer'
import Search from '../components/Modules/Search';
import { connect, useDispatch } from 'react-redux';
import {
  getProducts
} from '../redux/actions/productActions';
import LandingPage from '../components/LandingPage/LandingPage';



const theme = createMuiTheme({
    palette: {
      primary: {
        main:"#000000",
      },
      secondary: {
        main:"#000000",
      },
    },
    typography: {
      fontFamily: [
        'Roboto'
      ],
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

    
    <LandingPage />

    {/* <div>  </div> */}

    <div className="searchable-product-list">
    {filteredProducts.map((product) => (
    <li className="product-li" key={product.product_id}> 
      <Link style={{ textDecoration: 'none' }} className="product-wrapper" to={`/product/${product.product_id}`}>
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
        </div>
      </Link>
    </li>
    ))}
    </div>

    <Footer/>
    </ThemeProvider>
    );
};

function mapStateToProps(state) {
  return { products: state.productReducer.products };
}

export default connect(mapStateToProps)(Home);
