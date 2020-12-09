import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const ProductAdmin = () => {
    return (
        <Tabs defaultActiveKey="AddProduct" id="product-admin-tabs">
            <Tab eventKey="AddProduct" title="AddProduct">
                AddProduct
            </Tab>
            <Tab eventKey="UpdateProduct" title="UpdateProduct">
                UpdateProduct
            </Tab>
            <Tab eventKey="DeleteProduct" title="DeleteProduct">
                DeleteProduct
            </Tab>
            <Tab eventKey="ListProduct" title="ListProduct">
                ListProduct
            </Tab>
        </Tabs>
    );
}

export default ProductAdmin;