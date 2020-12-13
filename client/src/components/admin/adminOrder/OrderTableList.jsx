import React from 'react';
import { Table } from 'react-bootstrap';


const OrderTableLsit = ( { orders }) => {


    const orderList = orders && orders.map((o, index) => {
        return (
            <tr key={o.id}>
                    <td>{index}</td>
                    <td>{o.id}</td>
                    <td>{o.date}</td>
                    <td>{o.customerId}</td>
                    <td>{o.shippingId}</td>
            </tr>
        );
    })
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>date</th>
                    <th>customerId</th>
                    <th>shippingId</th>
                </tr>
            </thead>
            <tbody>
                {orderList}
            </tbody>
        </Table>
    );
}

export default OrderTableLsit;