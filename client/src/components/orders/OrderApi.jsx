import axios from 'axios';

const orderBaseUrl = "http://localhost:9000/api/order/";

export const fetchOrderList = () => {
    return axios.get(orderBaseUrl);
}

export const putOrder = (order, orderId) => {
    return axios.put(`${orderBaseUrl}/${orderId}`, order);
}

export const deleteOrderApi = (orderId) => {
    return axios.delete(`${orderBaseUrl}/${orderId}`);
}