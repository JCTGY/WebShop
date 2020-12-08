import React from 'react';

const AddToCartButton = ( {qty, setQty}) => {

    const onClickAddToCart = () => {
        setQty(0);
    }

    return (
        <button onClick={onClickAddToCart}>AddToCart</button>
    )
}

export default AddToCartButton;