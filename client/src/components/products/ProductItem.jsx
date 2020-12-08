import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, url }) => {

    return (
        <div>
            <Link to={`${url}/${product.id}`}>
                <h5>{product.name}</h5>
                <img className="product-img" src={product.imgUrl} alt="" />
            </Link>
            <p>{product.description}</p>
            <h6>{`$${product.price.toFixed(2)}`}</h6>

        </div>
    );
}

export default ProductItem;