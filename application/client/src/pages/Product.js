import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/Modules/NavBar';
import Footer from '../components/Modules/Footer';
import { FaShoppingCart } from 'react-icons/fa';
import { connect, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  setProduct,
  addProductToCart,
  setPriceMatchingProducts,
} from '../redux/actions/productActions';
import {
  setCartContents
} from '../redux/actions/shoppingCartActions';

const Product = (props) => {

    const dispatch = useDispatch(); 
    const { params } = props.match;

    useEffect(() => {
        axios.get(`/api/products/${params.id}`)
            .then((res) => {
                console.log(res);
                dispatch(setProduct(res.data));

                axios.get(`/api/price-matching/${res.data.title}`)
                    .then((res) => {
                        console.log(res);

                        axios.post(`/api/price-matching/${params.id}`, res.data)
                            .then((res) => {
                                console.log(res);

                                // perform dispatch here for populating 'setPriceMatchingProducts',
                                // that way we are loading redux state from data stored in our DB
                                dispatch(setPriceMatchingProducts(res.data.pm_products));
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });

        axios.get(`/api/cart/${props.user_id}`)
            .then((res) => {
                dispatch(setCartContents(res.data));
                console.log('cart contents:\n');
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const addProductHandler = () => {
        dispatch(addProductToCart());
    };

    return (
        <div>
            <NavBar page={"Product"}/>
            <div className="individual-product-wrapper">
                <div className="individual-product-content">
                    <h4 className="individual-product-title">
                        {props.product.title}
                    </h4>
                    <h5 className="individual-product-description">
                        {props.product.description}
                    </h5>
                    <div className="individual-product-details">
                        <img 
                            src={`/uploads/${props.product.image}`}
                            className="individual-product-image" 
                            alt="Failed to load."
                        />
                        <div className="individual-product-additional-details">
                            <h5> Condition: <span> New </span> </h5>
                            <h5> Quantity: <span> 5 </span> </h5>
                            <h5> Price: $<span> {props.product.price} </span> </h5>
                            <h5> Seller: <span> {props.product.creator} </span> </h5>
                            <div className="purchase-product-wrapper">
                              {/* <button className="purchase-product-button"> Purchase </button> */}
                              <Button variant="contained" color="primary" onClick={addProductHandler}>Add to Cart &nbsp; <FaShoppingCart /></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="price-matching-algorithm">
                    <ul className="price-matching-algorithm-ul">
                        {props.priceMatchingProducts.map((pm_product, index) => (
                            <li className="pm-product-li" key={index}>
                                <img  
                                    src={pm_product.productImage}
                                    className="pm-product-image"
                                    alt="Failed to load."
                                />
                                <div className="pm-product-details">
                                    <span className="pm-product-creator"> Creator: {pm_product.productSeller} </span>
                                    <span className="pm-product-title"> { pm_product.productTitle }  </span>
                                    <span className="pm-product-price"> { pm_product.productPrice } </span> 
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

function mapStateToProps(state) {
  return { 
      product: state.productReducer.product,
      user_id: state.loginReducer.user_id,
      priceMatchingProducts: state.productReducer.priceMatchingProducts
  };
}

export default connect(mapStateToProps)(Product);