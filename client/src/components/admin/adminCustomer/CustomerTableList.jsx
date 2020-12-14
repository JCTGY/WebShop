import React from 'react';

const CustomerTableLsit = ({ customers }) => {


    const customerList = customers && customers.map((c, index) => {
        return (
            <tr key={c.customerId}>
                <td>{index}</td>
                <td>{c.customerId}</td>
                <td>{c.userName}</td>
                <td>{c.firstName}</td>
                <td>{c.lastName}</td>
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
                        <th>userName</th>
                        <th>firstName</th>
                        <th>lastName</th>
                    </tr>
                </thead>
                <tbody>
                    {customerList}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerTableLsit;