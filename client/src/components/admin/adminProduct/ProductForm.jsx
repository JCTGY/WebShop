import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ProductForm = ({ action, actionName }) => {

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        description: "",
        imgUrl: "",
        category: "",
        price: ""
    });

    const onChangeForm = ({ target: { name, value } }) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (
        <Form>
            {(actionName && (actionName === "Update" || actionName === "Delete")) &&
                <Form.Group controlId="formId">
                    <Form.Label>Id</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Product Id" 
                        name="id" 
                        onChange={onChangeForm} 
                        value={formData.id} />
                </Form.Group>
            }
            {(actionName && actionName !== "Delete") &&
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Product Name" 
                            name="name" 
                            onChange={onChangeForm} 
                            value={formData.name} />
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Description" 
                            name="description" 
                            onChange={onChangeForm} 
                            value={formData.description} />
                    </Form.Group>
                    <Form.Group controlId="formImgUrl">
                        <Form.Label>Image Url</Form.Label>

                        <Form.Control 
                            type="text" 
                            placeholder="Enter Image Url" 
                            name="imgUrl" 
                            onChange={onChangeForm} 
                            value={formData.imgUrl} />
                    </Form.Group>
                    <Form.Group controlId="formCategory">
                        <Form.Label>Category</Form.Label>

                        <Form.Control 
                            type="text" 
                            placeholder="Enter Category" 
                            name="category" 
                            onChange={onChangeForm} 
                            value={formData.category} />
                    </Form.Group>
                    <Form.Group controlId="formPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Price" 
                            name="price" 
                            onChange={onChangeForm} 
                            value={formData.price} />
                    </Form.Group>
                </div>
            }
            <Button 
                onClick={(e) => action(formData, e)} 
                variant="primary" 
                type="submit">
                    {actionName}
            </Button>
        </Form>
    );
}

export default ProductForm;