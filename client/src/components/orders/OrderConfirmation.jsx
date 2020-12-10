import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Col,Row} from 'react-bootstrap';

const OrderConfirmation = props =>{

    const orderUrl = `http://localhost:9000/api/order/${props.orderId}`;

    const[order, setOrder] = useState();


    
    // useEffect(() => {
    //     axios.get(orderUrl)
    //     .then((response) => {
    //     console.log(response.data);
    // })
    // }, [])


    return (
        <h2>{props.orderId}</h2>
        
    )
}

export default OrderConfirmation;