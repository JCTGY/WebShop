import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';

import ProductAdmin from './adminProduct/ProductAdmin';
import CustomerAdmin from './adminCustomer/CustomerAdmin';
import OrderAdmin from './adminOrder/OrderAdmin';
import './Admin.css';

const Admin = () => {
    return (
        <div className="shadowed-box">
            <Tab.Container id="admin-tabs" defaultActiveKey="product">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="product">Product</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="customer">Customer</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="order">Order</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="product">
                                <ProductAdmin />
                            </Tab.Pane>
                            <Tab.Pane eventKey="customer">
                                <CustomerAdmin/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="order">
                                <OrderAdmin/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default Admin;