import React from 'react';

import '../Admin.css';

const ProductTableLsit = ({ products }) => {

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
        <div className="table-fixed">
            <table className="table table-hover">
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
            </table>
        </div>
    );
}

export default ProductTableLsit;