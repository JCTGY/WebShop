import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Products from './products/Products';
import Order from './orders/Order';
import Cart from './cart/Cart';

const NavBar = props =>{


    return (
            <Router>
                <div class="NavBar">
                    <Link to="/"><h2>WebShop</h2></Link>
                    <Link to="/products">Products</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/cart">Cart</Link>
                </div>
               
            <Switch>
              <Route path="/products">
                  <Products/>
              </Route>
              <Route path="/orders">
                  <Order/>
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