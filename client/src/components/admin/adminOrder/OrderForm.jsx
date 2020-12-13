import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CustomerForm = ({ action, actionName }) => {

    const [formData, setFormData] = useState({
        Id: "",
        date: "",
        customerId:"",
        shippingId: "",
    });

    const onChangeForm = ({ target: { name, value } }) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const onClickForm = (e) => {
        action(formData, e);
        setFormData({
            Id: "",
            date: "",
            customerId:"",
            shippingId: "",
        });
    }

    return (
        <Form>
            {(actionName && (actionName === "Update" || actionName === "Delete")) &&
                <Form.Group controlId="formOrderId">
                    <Form.Label>Id</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Order Id" 
                        name="Id" 
                        onChange={onChangeForm} 
                        value={formData.Id} />
                </Form.Group>
            }
            {(actionName && actionName !== "Delete") &&
                <div>
                    <Form.Group controlId="formOrderDate">
                        <Form.Label>Order Date</Form.Label>
                        <Form.Control 
                            type="date" 
                            placeholder="Enter order date" 
                            name="date" 
                            onChange={onChangeForm} 
                            value={formData.date} />
                    </Form.Group>
                    <Form.Group controlId="formCustomerId">
                        <Form.Label>Customer Id</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter CustomerId" 
                            name="customerId" 
                            onChange={onChangeForm} 
                            value={formData.customerId} />
                    </Form.Group>
                    <Form.Group controlId="formShippingId">
                        <Form.Label>Shipping Id</Form.Label>

                        <Form.Control 
                            type="text" 
                            placeholder="Enter Shipping Id" 
                            name="shippingId" 
                            onChange={onChangeForm} 
                            value={formData.shippingId} />
                    </Form.Group>
                </div>
            }
            <Button 
                onClick={onClickForm} 
                variant="primary" 
                type="submit">
                    {actionName}
            </Button>
        </Form>
    );
}

export default CustomerForm;