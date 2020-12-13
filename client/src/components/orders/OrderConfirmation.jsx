import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import './OrderConfirmation.css';

const OrderConfirmation = props => {



    const user = useSelector(state => state.userState.user);
    const dispatch = useDispatch();
    const shippingInfo = user.shippingInfo;
    const orderUrl = `http://localhost:9000/api/order/?custId=${user.customerId}&cartId=${user.cartId}`;

    const [order, setOrder] = useState();


    useEffect(() => {
        if (user.shippingInfo !== undefined && user.shippingInfo !== null
            && user.shippingInfo.shippingId > 0) {
        axios.post(`${orderUrl}&shippingId=${user.shippingInfo.shippingId}`)
            .then((response) => {
                console.log(response.data);
                dispatch({ type: 'CLEAN_ITEM', payload: [] });
                setOrder(response.data);
            }).catch(err => {
                console.log(err);
            })
        }
    }, [shippingInfo])


    return (
        <div className="container" id="orderConfirm">
        {shippingInfo && <div>
            <h2>Order Confirmation</h2>
            <p>Order Number:{order && order.id}</p>
            <ul>Items
                {order && order.products.map(product => {
                return <li id="noBullets" key={product.productId}>
                    {product.name}, Quantity: {product.qty}<br/><br/>
                    </li>
                })}
            </ul>
            <div>
                Shipping Info
                <p>{shippingInfo['firstName']} {shippingInfo['lastName']}<br/>
                {shippingInfo['address1']}<br/>
                {shippingInfo['address2']}<br/>
                {shippingInfo['city']} {shippingInfo['state']} {shippingInfo['postalCode']}</p>

            </div>
        </div>}
        </div>


    )
}

export default OrderConfirmation;