import React, {useState, useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';

import { fetchProductList } from './ProductApi';
import ProductItem from './ProductItem';

const ProductList = () => {

    const [product, setProduct] = useState();

    useEffect(() => {
        fetchProductList()
        .then(res => {
          const result = res.data;
          setProduct(result);
        });
        return () => {
        };
    }, []);

    const productList = product && product.map(p => {
        return (
            <Col key={p.id}>
                <ProductItem product={p}/>
            </Col>
        );
    })

    return (
        <Row xs={1} md={2} lg={3}>
            {productList}
        </Row>
    );
}

export default ProductList;