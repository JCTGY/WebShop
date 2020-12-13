import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CustomerForm = ({ action, actionName }) => {

    const [formData, setFormData] = useState({
        customerId: "",
        userName: "",
        password:"",
        firstName: "",
        lastName: "",
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
            customerId: "",
            userName: "",
            password:"",
            firstName: "",
            lastName: "",
        });
    }

    return (
        <Form>
            {(actionName && (actionName === "Update" || actionName === "Delete")) &&
                <Form.Group controlId="formCustomerId">
                    <Form.Label>Id</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Customer Id" 
                        name="customerId" 
                        onChange={onChangeForm} 
                        value={formData.customerId} />
                </Form.Group>
            }
            {(actionName && actionName !== "Delete") &&
                <div>
                    <Form.Group controlId="formUserName">
                        <Form.Label>userName</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter userName" 
                            name="userName" 
                            onChange={onChangeForm} 
                            value={formData.userName} />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter password" 
                            name="password" 
                            onChange={onChangeForm} 
                            value={formData.password} />
                    </Form.Group>
                    <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>

                        <Form.Control 
                            type="text" 
                            placeholder="Enter First Name" 
                            name="firstName" 
                            onChange={onChangeForm} 
                            value={formData.firstName} />
                    </Form.Group>
                    <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>

                        <Form.Control 
                            type="text" 
                            placeholder="Enter Last Name" 
                            name="lastName" 
                            onChange={onChangeForm} 
                            value={formData.lastName} />
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