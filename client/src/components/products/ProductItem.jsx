import React from 'react';

const ProductItem = ({ product }) => {

    return (
        <div>
            <h6>{product.name}</h6>
            <img className="product-img" src={product.imgUrl} alt="" />
            <p>{product.description}</p>
            <h6>{`$${product.price.toFixed(2)}`}</h6>
        </div>
    );
}

export default ProductItem;