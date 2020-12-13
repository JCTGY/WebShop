import React from 'react';
import { Table } from 'react-bootstrap';

const ProductTableLsit = ( { products }) => {

    const productList = products && products.map((p, index) => {
        return (
            <tr key={p.productId}>
                    <td>{index}</td>
                    <td>{p.productId}</td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
            </tr>
        );
    })
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {productList}
            </tbody>
        </Table>
    );
}

export default ProductTableLsit;