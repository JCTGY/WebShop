import React from 'react';
import ProductList from './ProductList';
import { Container } from 'react-bootstrap';
import './Product.css';

const Products = props =>{

    return (
        <Container>
            <h1>Products</h1>
            <ProductList/>
        </Container>
    )
}

export default Products;