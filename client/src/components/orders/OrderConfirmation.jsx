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
       <div className="container">
           <h2>Order Confirmation</h2>
           <p>Order Numer:</p>
           <ul>Items
           <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
           </ul>
            <div>
                Shipping Info
                <p>First Name: </p>
                <p>Last Name: </p>
                <p>Address</p>
                <p>Address</p>
                <p>City</p>
                <p>State</p>
                <p>Postal Code</p>

            </div>

       </div>

        
    )
}

export default OrderConfirmation;