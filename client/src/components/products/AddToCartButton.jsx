import React from 'react';
import { useHistory } from 'react-router-dom';

import { postProductToCart } from './ProductApi';

const AddToCartButton = ( {product, qty, setQty}) => {
    
    const history = useHistory();
    const onClickAddToCart = () => {
        product["count"] = qty;
        postProductToCart(product).then(res => {
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