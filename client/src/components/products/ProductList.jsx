import React, {useState, useEffect} from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import { fetchProductListByPageSize } from './ProductApi';
import PageNav from '../utils/PageNav';
import ProductItem from './ProductItem';

const ProductList = ( {term} ) => {

    const [products, setProducts] = useState();
    const [page, setPage] = useState(0);
    const size = 6;
    const [itemCount, setItemCout] = useState(size);
    const { url } = useRouteMatch();

    useEffect(() => {
        fetchProductListByPageSize(term, page, size)
        .then(res => {
          const result = res.data;
          setItemCout(result.length);
          setProducts(result);
        });
        fetchProductListByPageSize(term, page + 1, size)
        .then(res => {
            console.log("next page: " + res);
            setItemCout(res.data.length);
        }).catch(err => {
            setItemCout(-1);
        }) 
    }, [page, term]);

    useEffect(() => {
        setPage(0);
    }, [term])

    const productList = products && products.map(p => {
        return (
            <Col key={p.productId}>
                <ProductItem url={url} product={p}/>
            </Col>
        );
    })

    return (
        <div className="product-box">
        <PageNav page={page} setPage={setPage} itemCount={itemCount}/>
        <Row xs={1} md={2} lg={3}>
            {productList}
        </Row>
        <PageNav page={page} setPage={setPage} itemCount={itemCount}/>
        </div>
    );
}

export default ProductList;