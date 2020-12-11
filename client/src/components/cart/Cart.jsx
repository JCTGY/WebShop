import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { table} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './Cart.css';

const Cart = props =>{

        const user = useSelector(state => state.userState.user);
        console.log(user);
        const cartUrl = `http://localhost:9000/api/cart/v1/cart/get/cartById/${user.cartId}`;
        const totalUrl = `http://localhost:9000/api/cart/v1/cart/get/totalByCartId/${user.cartId}`;
        const[cart, setCart] = useState([]); 
        const[total, setTotal] = useState(0.00);  

        const fetchCart = ()=>{
            axios.get(cartUrl)
            .then((response) => {
                console.log(response.data);
                setCart(response.data);
            })
        }
        const fetchTotal = ()=>{
            axios.get(totalUrl)
            .then((response)=>{
                setTotal(response.data);
            })

        }
        
        useEffect(()=>{
            fetchCart();
            fetchTotal();
        }, []);


    return (
        <div className="shadowed-box">
            <h1 className="text-center">Cart</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Qty</th>
                        <th>Unit Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        cart &&
                        cart.map((item)=>(
                            <tr key={item.id}>

                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.qty}</td>
                                <td>{`$${item.price.toFixed(2)}`}</td>
                            </tr>

                        ))
                    }
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>{`$${total}`}</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Cart;