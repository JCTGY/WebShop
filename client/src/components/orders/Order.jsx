import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Col,Row} from 'react-bootstrap';


const Order = props =>{

    const ordersUrl = "http://localhost:7061/orders";
    const[orders, setOrders] = useState([]);

    const[order, setTheOrder] = useState();

    

    useEffect(() => {
        axios.get(ordersUrl)
    .then((response) => {
        console.log(response.data);
        setOrders(response.data);
    })
    }, [])

    const handleClick = (order) =>{
       // console.log(event);
        
        setTheOrder(order);
    }

    return (
        <div>
            <h1>Orders</h1>
            <Row>
                <Col>
                    {orders.map( order => {
                        return <div key={order.id} onClick = {()=>handleClick(order)}>
                            <h2>ORDER #: {order.id}</h2>
                            <p>Date: {order.date}</p>
                            <p>Order Total: ${order.total}</p>
                            <p>Tracking Number: {order.trackingID}</p>
                        </div>
                    })}
                </Col>
                <Col>
                    <div>{order && order.id}</div>
                </Col>
            </Row>
        </div>
    )
}

export default Order;