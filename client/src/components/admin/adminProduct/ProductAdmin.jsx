import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import ProductForm from './ProductForm';
import ProductTableList from './ProductTableList';
import { 
            fetchProductList, 
            postProduct, 
            putProduct, 
            deleteProductApi 
        } from '../../products/ProductApi';


const ProductAdmin = () => {
    const [products, setProducts] = useState();
    const addProduct = (formData, e) => {
        e.preventDefault();
        postProduct(formData).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err);
        })
    }
    
    const updateProduct = (formData, e) => {
        e.preventDefault();
        putProduct(formData, formData.id).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
    
    const deleteProduct = (formData, e) => {
        e.preventDefault();
        deleteProductApi(formData.id).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
    
    useEffect(() => {
        fetchProductList().then(res =>{
            setProducts(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, []);
    return (
        <Tabs defaultActiveKey="AddProduct" id="product-admin-tabs">
            <Tab eventKey="AddProduct" title="AddProduct">
                <ProductForm action={addProduct} actionName="Add"/>                
            </Tab>
            <Tab eventKey="UpdateProduct" title="UpdateProduct">
                <ProductForm action={updateProduct} actionName="Update"/>                
            </Tab>
            <Tab eventKey="DeleteProduct" title="DeleteProduct">
                <ProductForm action={deleteProduct} actionName="Delete"/>
            </Tab>
            <Tab eventKey="ListProduct" title="ListProduct">
                <ProductTableList products={products}/>
            </Tab>
        </Tabs>
    );
}

export default ProductAdmin;