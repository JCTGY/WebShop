import React from 'react';
import { Table } from 'react-bootstrap';

const CustomerTableLsit = ( { customers }) => {

    const customerList = customers && customers.map((c, index) => {
        return (
            <tr key={c.id}>
                    <td>{index}</td>
                    <td>{c.customerId}</td>
                    <td>{c.userName}</td>
                    <td>{c.firstName}</td>
                    <td>{c.lastName}</td>
            </tr>
        );
    })
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>userName</th>
                    <th>firstName</th>
                    <th>lastName</th>
                </tr>
            </thead>
            <tbody>
                {customerList}
            </tbody>
        </Table>
    );
}

export default CustomerTableLsit;