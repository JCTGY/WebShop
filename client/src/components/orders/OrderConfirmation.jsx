import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import './OrderConfirmation.css';

const OrderConfirmation = props => {



    const user = useSelector(state => state.userState.user);
    const dispatch = useDispatch();
    const shippingInfo = user.shippingInfo;
    const orderUrl = `http://localhost:9000/api/order/?custId=${user.customerId}&cartId=${user.cartId}`;

    const [order, setOrder] = useState();


    useEffect(() => {
        if (user.shippingInfo !== undefined && user.shippingInfo.shippingId > 0) {
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
            <p>Order Number:{order && order.Id}</p>
            <ul>Items
                {order && order.products.map(product => {
                return <li id="noBullets" key={product.productId}>
                    {product.name}, Quantity: {product.qty}<br/><br/>
                    </li>
                })}
            </ul>
            <div>
                Shipping Info
                <p>First Name: {shippingInfo['firstName']}</p>
                <p>Last Name: {shippingInfo['lastName']}</p>
                <p>Address {shippingInfo['address1']}</p>
                <p>Address {shippingInfo['address2']}</p>
                <p>City {shippingInfo['city']}</p>
                <p>State {shippingInfo['state']}</p>
                <p>Postal Code {shippingInfo['postalCode']}</p>

            </div>
        </div>}
        </div>


    )
}

export default OrderConfirmation;