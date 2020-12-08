import React, {useState, useEffect} from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import { fetchProductList } from './ProductApi';
import ProductItem from './ProductItem';

const ProductList = () => {

    const [products, setProducts] = useState();
    const { url } = useRouteMatch();
    useEffect(() => {
        fetchProductList()
        .then(res => {
          const result = res.data;
          setProducts(result);
        });
        return () => {
        };
    }, []);

    const productList = products && products.map(p => {
        return (
            <Col key={p.id}>
                <ProductItem url={url} product={p}/>
            </Col>
        );
    })

    return (
        <div>
        <Row xs={1} md={2} lg={3}>
            {productList}
        </Row>
        </div>
    );
}

export default ProductList;