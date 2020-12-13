import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import CustomerTableList from './CustomerTableList';
import { fetchCustomersList } from '../../customer/CustomerApi';


const CustomerAdmin = () => {
    const [customers, setCustomers] = useState();
    
    useEffect(() => {
        fetchCustomersList().then(res => {
            console.log(res);
            setCustomers(res.data);
        }).catch(err => {
            console.log(err);
        }) 
    }, [])

    return (
        <Tabs defaultActiveKey="ListCustomer" id="customer-admin-tabs">
            <Tab eventKey="ListCustomer" title="ListCustomer">
                <CustomerTableList customers={customers}/>
            </Tab>
            <Tab eventKey="UpdateCustomer" title="UpdateCustomer">
                update customer
            </Tab>
            <Tab eventKey="DeleteCustomer" title="DeleteCustomer">
                DeleteCustomer
            </Tab>
            <Tab eventKey="AddCustomer" title="AddCustomer">
                AddCustomer
            </Tab>
        </Tabs>
    );
}

export default CustomerAdmin;