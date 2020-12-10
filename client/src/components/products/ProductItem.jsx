import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, url }) => {

    return (
        <div className="product-list-item">
            <div className="product-link-shadow">
                <div className="product-link-wrapper">
                        <Link to={`${url}/${product.id}` } className="product-link">See More
                        </Link>
                </div>
            </div>
            <img className="product-img" src={product.imgUrl} alt="" />

  
            <p>{product.name}</p>
            <h6>{`$${product.price.toFixed(2)}`}</h6>
            {/* <p>{product.description}</p> */}
            <p></p>

        </div>
    );
}

export default ProductItem;