import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Products from './products/Products';
import ProductItemPage from './products/ProductItemPage';
import Order from './orders/Order';
import Cart from './cart/Cart';
import Shipping from './shipping/Shipping';

const NavBar = props => {


    return (
        <Router>
            <div className="NavBar">
                <Link to="/"><h2>WebShop</h2></Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/shipping">Shipping</Link>
                <Link to="/cart">Cart</Link>
            </div>

            <Switch>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route path="/products/:productId">
                    <ProductItemPage />
                </Route>
                <Route path="/orders">
                    <Order />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route exact path="/">
                    <div>
                        <h1>Home</h1>
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default NavBar;