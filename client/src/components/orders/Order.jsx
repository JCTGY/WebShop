import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './Order.css';
import {Col,Container,Row} from 'react-bootstrap';


const Order = props =>{

    const user = useSelector(state => state.userState.user);
    const ordersUrl = `http://localhost:9000/api/order/cust/${user.customerId}`;

    const[order, setTheOrder] = useState();
    const shippingDeetsUrl = `http://localhost:9000/api/shipping/`;// + order.shippingId;

    const[orders, setOrders] = useState([]);

    const[shippingDetails, setShippingDetails] = useState();

    

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
        console.log(order);
        axios.get(shippingDeetsUrl + user.shippingInfo.shippingId)
        .then((response) => {
            setShippingDetails(response.data);
        })

       // var span = document.getElementById("closeOrder")[0];

        //document.getElementById("ordersRow1").style.display = "block";
        document.getElementById("ordersRow").style.display = "block";
        // document.getElementById("orderDetails").style.display = "block";
        // document.getElementById("shippingDetails").style.display = "block";
    }

    const handleClose = () =>{
        //document.getElementById("ordersRow1").style.display = "none";
        document.getElementById("ordersRow").style.display = "none";
        // document.getElementById("orderDetails").style.display= "none";
        // document.getElementById("shippingDetails").style.display = "none";
    }

    


    return (
        <Container>
            <h1>Orders</h1>
            <Row>
                <Col>
                    {orders.map( order => {
                        return <div key={order.dbId}>
                            <h2 className="orderTitle" onClick = {()=>handleClick(order)}>ORDER #: {order.id}</h2>
                            <p>Date: {order.date}<br/>
                            Order Total: ${order.total}</p>
                        </div>
                    })}
                </Col>
                <div id="ordersRow" className="orderModal">
                    <Row className="orderModal-content">
                        <span className="closeOrder" onClick = {()=>handleClose()}>&times;</span>
                        <Col>
                            <div>
                                    <div>
                                        <h2>ORDER #: {order && order.id} </h2>
                                    </div>
                                    <p>Date: {order && order.date}</p>
                                    <p>Order Total: ${order && order.total}</p>
                                    <p>Shipping Id: {order && order.shippingId}</p>
                                    {order && order.products.map( product => {
                                        return <div key={product.productId}>
                                            <img src={product.imgUrl} className="product-img"></img>
                                            <h4>{product.name}</h4>
                                            <p>${product.price}</p>
                                            <p>Quantity: {product.count}</p>
                                        </div>
                                    })}
                                </div>
                        </Col>
                        <Col>
                            <div>
                                <h2>Shipping Details</h2>
                                <p>Customer Name: {shippingDetails && (shippingDetails.firstName
                                +" "+ shippingDetails.lastName)}</p>
                                <p>Shipping Address: {shippingDetails && 
                                shippingDetails.address1}<br/>
                                                   {shippingDetails && shippingDetails.address2}<br/>
                                                   {shippingDetails && shippingDetails.city} {shippingDetails && shippingDetails.state}<br/>
                                                   {shippingDetails && shippingDetails.postalCode}
                                </p>
                                <p>Special Instructions: {shippingDetails && shippingDetails.specialInstructions}</p>
                                <p>Shipping Type: {shippingDetails && shippingDetails.shippingType}</p>
                                <p>Shipping Cost: {shippingDetails && shippingDetails.shippingCost}</p>

                            </div>
                        </Col>
                </Row>
                </div>
            </Row>
        </Container>
    )
}

export default Order;