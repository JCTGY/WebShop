import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';
import {IconContext} from "react-icons";
import { postProductToCart } from './ProductApi';

const AddToCartButton = ({ product, qty, triggerQtyWarning }) => {

    const user = useSelector(state => state.userState.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const checkOutList = useSelector(state => state.checkOut.checkOutList);
    const onClickAddToCart = () => {

        if (qty === 0) {
            triggerQtyWarning();
            return;
        }
        if (user.auth === false) {
            history.push("/signIn");
            return;
        }
        const index = checkOutList && checkOutList.findIndex(c => c.produntId === product.produntId);
        product["qty"] = qty;
        postProductToCart(product, user.cartId).then(res => {
            console.log(res);
            console.log("cart: " + checkOutList);
            if (index >= 0) {
                checkOutList[index].qty = qty;
                dispatch({ type: 'UPDATE_ITEM', payload: checkOutList });
            } else {
                dispatch({ type: 'ADD_ITEM', payload: product });
            }
            history.push("/products");
        }).catch(err => {
            console.log(err);
        })
        // setQty(0);
    }

    return (
        <a className="main-btn" id="cart-btn" onClick={onClickAddToCart}><FaCartPlus/></a>
    )
}

export default AddToCartButton;