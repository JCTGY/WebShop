import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, url }) => {

    return (
            <div className="product-list-item">
                <div className="product-link-shadow">
                    <div className="product-link-wrapper">
                            <Link to={`${url}/${product.productId}` } className="product-link">Details
                            </Link>
                    </div>
                </div>
                <img className="product-list-img" src={product.imgUrl} alt="" />

                <div className="product-name">
                    <p>{product.name}</p>
                </div>
                <h6 className="product-price">{`$${product.price.toFixed(2)}`}</h6>

            </div>

    );
}

export default ProductItem;