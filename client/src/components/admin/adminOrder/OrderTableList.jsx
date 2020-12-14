import React from 'react';

const OrderTableLsit = ({ orders }) => {

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
        <div className="table-fixed">
            <table className="table table-hover">
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
            </table>
        </div>
    );
}

export default OrderTableLsit;