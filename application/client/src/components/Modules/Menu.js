import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

const Menu = (props) => {

    return (
        <div id="sidenav-menu" onClick={() => props.handleMouseClick()}>
            <NavLink to="/receipt-info">
                <div className="checkout-button"> $ <span> </span> Checkout </div>
            </NavLink>
            <div className="shopping-cart-products">
                <ul className="shopping-cart-products-ul">
                    {   
                        (props.cart.products === undefined) ? null 
                        : props.cart.products.map((product, index) => (
                            <li key={index}>
                                <div className="checkout-product-quantity-title">
                                    <h4> 1 </h4>
                                    <h4> {product.title} </h4>
                                </div>
                                <div className="checkout-product-price">
                                    <h4> {product.price} </h4>
                                </div>
                            </li>
                        )) 
                    }
                </ul>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return { 
        cart: state.shoppingCartReducer.cart
    };
}

export default connect(mapStateToProps)(Menu);