import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Col,Row} from 'react-bootstrap';


const Order = props =>{

    const ordersUrl = "http://localhost:9000/api/order/";

    const[order, setTheOrder] = useState();
    const shippingDeetsUrl = "http://localhost:9000/api/shipping/";// + order.shippingId;

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

        axios.get(shippingDeetsUrl+order.shippingId)
        .then((response) => {
            setShippingDetails(response.data);
        })

        document.getElementById("ordersRow").style.display = "block";
        // document.getElementById("orderDetails").style.display = "block";
        // document.getElementById("shippingDetails").style.display = "block";
    }

    const handleClose = () =>{
        document.getElementById("ordersRow").style.display = "none";
        // document.getElementById("orderDetails").style.display= "none";
        // document.getElementById("shippingDetails").style.display = "none";
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
                            <p>Shipping Id: {order.shippingId}</p>
                        </div>
                    })}
                </Col>
                <div id="ordersRow">
                    <Row>
                        <Col>
                            <div >
                                    <div>
                                        <button onClick = {()=>handleClose()}>close</button>
                                        <h2>ORDER #: {order && order.id} </h2>
                                    </div>
                                    <p>Date: {order && order.date}</p>
                                    <p>Order Total: ${order && order.total}</p>
                                    <p>Shipping Id: {order && order.shippingId}</p>
                                    {order && order.products.map( product => {
                                        return <div key={product.productID}>
                                            <img src={product.imgUrl} className="product-img"></img>
                                            <h4>{product.name}</h4>
                                            <p>${product.price}</p>
                                            <p>Quantity: {product.count}</p>
                                        </div>
                                    })}
                                </div>
                        </Col>
                        <Col>
                            <div >
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

                                {/*  private String firstName;
                                    private String lastName;
                                    private String address1;
                                    private String address2;
                                    private String city;
                                    private String state;
                                    private String postalCode;
                                    private String specialInstructions;
                                    private String shippingType;
                                    private double shippingCost; */}
                            </div>
                        </Col>
                </Row>
                </div>
            </Row>
        </div>
    )
}

export default Order;