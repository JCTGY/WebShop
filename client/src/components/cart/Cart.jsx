import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { table} from 'react-bootstrap';


const Cart = props =>{

   
        const cartUrl = "http://localhost:7063/v1/cart";
        const totalUrl = "http://localhost:7063/v1/cart/total"
        const[cart, setCart] = useState([]); 
        const[total, setTotal] = useState();  
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
        <div>
            <h1 class="text-center">Cart</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>unit Price</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{`$${item.price.toFixed(2)}`}</td>
                                <td>{item.count}</td>
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