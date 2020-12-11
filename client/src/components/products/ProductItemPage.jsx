import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';

import { fetchProductById } from './ProductApi';
import AddToCartButton from './AddToCartButton';

const ProductItemPage = () => {

    const [product, setProduct] = useState();
    const [qty, setQty] = useState(0);
    const [visibleAlert, setVisibleAlert] = useState(false);
    let { productId } = useParams();

    const triggerQtyWarning = () => {
        setVisibleAlert(true)
        setTimeout(() => {
            setVisibleAlert(false)
        }, 2000);
    }

    useEffect(() => {
        fetchProductById(productId)
            .then(res => {
                const result = res.data;
                console.log(result);
                setProduct(result)
            })
    }, [productId]);

    return (
        <div className="shadowed-box">
            {product ?
                <div>
                    <Alert show={visibleAlert} variant='danger'>
                        The Quantity cannot be Zero
                    </Alert>
                    <div > 
                        <img className="product-img" src={product.imgUrl} alt="" />
                    </div>
                    <div >
                        <div>
                            <h5>{product.name}</h5>
                            <hr></hr>
                        </div>
                        <div>
                            <p>{product.description}</p>
                        </div>

                        <div>
                            <h6>{`$${product.price.toFixed(2)}`}</h6>
                            <label htmlFor="product_qty">Quantity</label>
                            <input
                                onChange={e => setQty(e.target.value)}
                                id="product_qty"
                                type="number"
                                min="1"
                                max="15"
                                value={qty}
                            />
                        </div>
                        <hr/>
                            <AddToCartButton
                                    triggerQtyWarning={triggerQtyWarning}
                                    product={product}
                                    qty={qty}
                                    setQty={setQty}
                            />
                 
                
                    </div>
                </div>
                : null}
        </div>
    );
}

export default ProductItemPage;