import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ProductList from './ProductList';
import ProductSearchBar from './ProductSearchBar';
import './Product.css';

const Products = props =>{

    const [term, setTerm] = useState("");
    return (
        <Container>
            <ProductSearchBar setTerm={setTerm}/>
            <ProductList term={term}/>
        </Container>
    )
}

export default Products;