import React from 'react';

import { postProductToCart } from './ProductApi';

const AddToCartButton = ( {product, qty, setQty}) => {

    const onClickAddToCart = () => {
        product["count"] = qty;
        postProductToCart(product).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
        setQty(0);
    }

    return (
        <button onClick={onClickAddToCart}>AddToCart</button>
    )
}

export default AddToCartButton;