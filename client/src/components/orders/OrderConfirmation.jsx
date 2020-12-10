import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Col,Row} from 'react-bootstrap';
import {useSelector} from 'react-redux';

const OrderConfirmation = props =>{

    

    const user = useSelector(state => state.userState.user);

    const orderUrl = `http://localhost:9000/api/order/?custId=${user.customerId}&cartId=${user.cartId}`;
    
    const[order, setOrder] = useState();


    
     useEffect(() => {
         axios.post(orderUrl)
         .then((response) => {
         console.log(response.data);

         setOrder(response.data);
     })
     }, [])


    return (
       <div className="container">
           <h2>Order Confirmation</h2>
            <p>Order Numer:{order && order.Id}</p>
           <ul>Items
           {order && order.products.map( product => {
                return <li key={product.productID}>
                    {product.name}, Quantity: {product.count}
                    </li>
           })}
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