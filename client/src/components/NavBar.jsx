import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Products from './products/Products';
import Order from './orders/Order';
import Cart from './cart/Cart';
import Shipping from './shipping/Shipping';
import bg from '../images/home-page-img.jpg';

const NavBar = props =>{


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
              <Route path="/products">
                  <Products/>
              </Route>
              <Route path="/shipping">
                  <Shipping/>
              </Route>
              <Route path="/orders">
                  <Order/>
              </Route>
              <Route path="/cart">
                  <Cart />
               </Route>
              <Route exact path="/">
              
                <div className="img-wrapper">
                   <Link id="shop-now" to="/products">Shop Now</Link>
                </div>
              </Route>
          </Switch>
        </Router>
    )
}

export default NavBar;