import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Products from './products/Products';
import ProductItemPage from './products/ProductItemPage';
import Order from './orders/Order';
import OrderConfirmation from './orders/OrderConfirmation';

import Cart from './cart/Cart';
import Shipping from './shipping/Shipping';
import Admin from './admin/Admin';
import SignIn from './customer/SignIn';
import SignUp from './customer/SignUp';
import PrivateRoute from './PrivateRoute';
import ProtectedRout from './ProtectedRout';

const NavBar = props => {
    const user = useSelector(state => state.userState.user);
    
    return (
        <Router>
            <div className="NavBar">
                <Link to="/"><h2>WebShop</h2></Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/shipping">Shipping</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/signIn">SignIn</Link>
                { user.userName === 'admin' && 
                    <Link to="/admin">Admin</Link>
                }
            </div>

            <Switch>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route path="/products/:productId">
                    <ProductItemPage />
                </Route>
                <PrivateRoute 
                    component={Shipping}
                    authed={user.auth} 
                    path="/shipping" 
                    exact
                />
                <PrivateRoute 
                    component={Order}
                    authed={true} 
                    path="/orders" 
                    exact
                /> 
                <PrivateRoute 
                    component={Cart}
                    authed={user.auth} 
                    path="/cart" 
                    exact
                />
                <Route path="/signIn">
                    <SignIn/>
                </Route>
                <Route path="/order/:orderId">
                    <OrderConfirmation />
                </Route>
                <Route path="/signUp">
                    <SignUp/>
                </Route>
                <ProtectedRout 
                    component={Admin}
                    authed={user.userName} 
                    path="/admin" 
                    exact
                />>
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