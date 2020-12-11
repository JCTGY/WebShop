import React from 'react';
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap';

import ProductAdmin from './adminProduct/ProductAdmin';

const Admin = () => {
    return (
        <div className="shadowed-box">
            <Tab.Container id="admin-tabs" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="product">Product</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="customer">Customer</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="product">
                                <ProductAdmin />
                            </Tab.Pane>
                            <Tab.Pane eventKey="customer">
                                customer
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default Admin;