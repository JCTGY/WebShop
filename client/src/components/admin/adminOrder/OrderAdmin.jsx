import React, { useState,useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import OrderTableList from './OrderTableList';
import OrderForm from './OrderForm';
import { 
    fetchOrderList,
    putOrder,
    deleteOrderApi
} from '../../orders/OrderApi';

const OrderAdmin = () => {
    const [orders, setOrders] = useState();
    const [isUpdate, setIsUpdate] = useState(false);

    const updateOrder = (formData, e) => {
        e.preventDefault();
        putOrder(formData, formData.Id).then(res => {
            console.log(res);
            switchIsUpdate();
        }).catch(err => {
            console.log(err);
        })
    }
    
    const deleteOrder = (formData, e) => {
        e.preventDefault();
        deleteOrderApi(formData.Id).then(res => {
            console.log(res);
            switchIsUpdate();
        }).catch(err => {
            console.log(err);
        })
    }

    const switchIsUpdate = () => {
        setIsUpdate(!isUpdate);
    }

    useEffect(() => {
        fetchOrderList().then(res => {
            console.log(res);
            setOrders(res.data);
        }).catch(err => {
            console.log(err);
        }) 
    }, []);

    return (
        <Tabs defaultActiveKey="ListOrder" id="order-admin-tabs">

            <Tab eventKey="ListOrder" title="ListOrder">
                <OrderTableList orders={orders}/>
            </Tab>
            <Tab eventKey="UpdateOrder" title="UpdateOrder">
                <OrderForm action={updateOrder} actionName="Update"/>                
            </Tab>
            <Tab eventKey="DeleteOrder" title="DeleteOrder">
                <OrderForm action={deleteOrder} actionName="Delete"/>
            </Tab>
        </Tabs>
    );

}

export default OrderAdmin;