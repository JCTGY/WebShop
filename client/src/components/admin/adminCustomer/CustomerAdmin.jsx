import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import CustomerTableList from './CustomerTableList';
import CustomerForm from './CustomerForm';
import { 
    fetchCustomersList,
    postCustomer,
    putCustomer,
    deleteCustomerApi
 } from '../../customer/CustomerApi';


const CustomerAdmin = () => {
    const [customers, setCustomers] = useState();
    const [isUpdate, setIsUpdate] = useState(false);
    const addCustomer = (formData, e) => {
        e.preventDefault();
        postCustomer(formData).then(res => {
            console.log(res)
            switchIsUpdate();
        }).catch(err => {
            console.log(err);
        })
    }
    
    const updateCustomer = (formData, e) => {
        e.preventDefault();
        putCustomer(formData, formData.customerId).then(res => {
            console.log(res);
            switchIsUpdate();
        }).catch(err => {
            console.log(err);
        })
    }
    
    const deleteCustomer = (formData, e) => {
        e.preventDefault();
        deleteCustomerApi(formData.customerId).then(res => {
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
        fetchCustomersList().then(res => {
            console.log(res);
            setCustomers(res.data);
        }).catch(err => {
            console.log(err);
        }) 
    }, [isUpdate]);

    return (
        <Tabs defaultActiveKey="ListCustomer" id="customer-admin-tabs">
            <Tab eventKey="ListCustomer" title="ListCustomer">
                <CustomerTableList customers={customers} />
            </Tab>
            <Tab eventKey="UpdateCustomer" title="UpdateCustomer">
                <CustomerForm 
                    action={updateCustomer} 
                    actionName="Update"
                />
            </Tab>
            <Tab eventKey="DeleteCustomer" title="DeleteCustomer">
                <CustomerForm 
                    action={deleteCustomer} 
                    actionName="Delete"
                />
            </Tab>
            <Tab eventKey="AddCustomer" title="AddCustomer">
                <CustomerForm 
                    action={addCustomer} 
                    actionName="Add"
                />
            </Tab>
        </Tabs>
    );
}

export default CustomerAdmin;