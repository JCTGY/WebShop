import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Products from './products/Products';
import ProductItemPage from './products/ProductItemPage';
import Order from './orders/Order';
import Cart from './cart/Cart';
import Shipping from './shipping/Shipping';
import Admin from './admin/Admin';
import SignIn from './customer/SignIn';
import SignUp from './customer/SignUp';

const NavBar = props => {

    const user = useSelector(state => state.userState.user);
    if (user) console.log(user);
    return (
        <Router>
            <div className="NavBar">
                <Link to="/"><h2>WebShop</h2></Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/shipping">Shipping</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/signIn">SignIn</Link>
            </div>

            <Switch>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route path="/products/:productId">
                    <ProductItemPage />
                </Route>
                <Route path="/shipping">
                    <Shipping />
                </Route>
                <Route path="/orders">
                    <Order />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/signIn">
                    <SignIn/>
                </Route>
                <Route path="/signUp">
                    <SignUp/>
                </Route>
                <Route path="/admin">
                    <Admin />
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