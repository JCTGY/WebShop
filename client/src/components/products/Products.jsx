import React from 'react';
import { Container } from 'react-bootstrap';

import ProductList from './ProductList';
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