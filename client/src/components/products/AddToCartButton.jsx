import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { postProductToCart } from './ProductApi';

const AddToCartButton = ( {product, qty, setQty}) => {
    
    const user = useSelector(state => state.userState.user);
    const history = useHistory();
    const onClickAddToCart = () => {
        product["count"] = qty;
        postProductToCart(product, user.cartId).then(res => {
            console.log(res);
            history.push("/products");
        }).catch(err => {
            console.log(err);
        })
        // setQty(0);
    }

    return (
        <button onClick={onClickAddToCart}>AddToCart</button>
    )
}

export default AddToCartButton;