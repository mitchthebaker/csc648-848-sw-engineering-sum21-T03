import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/Modules/NavBar';
import Footer from '../components/Modules/Footer';
import { connect, useDispatch } from 'react-redux';
import {
  setProduct
} from '../redux/actions/productActions';

const Product = (props) => {

    const dispatch = useDispatch(); 
    const { params } = props.match;

    useEffect(() => {
        axios.get(`/api/products/${params.id}`)
            .then((res) => {
                console.log(res);
                dispatch(setProduct(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
                              <button className="purchase-product-button"> Purchase </button>
                            </div>
                            <div className="message-seller-wrapper">
                                 <NavLink className="message-seller-button" to="/"> <span className="message-seller"> Message Seller </span> </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

function mapStateToProps(state) {
    return { product: state.productReducer.product };
  }

export default connect(mapStateToProps)(Product);