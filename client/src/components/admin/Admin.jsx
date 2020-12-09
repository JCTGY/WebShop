import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';

import ProductAdmin from './adminProduct/ProductAdmin';

const Admin = () => {
    return (
        <Tab.Container id="admin-tabs" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="product">Product</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="orders">Orders</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="product">
                            <ProductAdmin/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="orders">
                            orders
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default Admin;