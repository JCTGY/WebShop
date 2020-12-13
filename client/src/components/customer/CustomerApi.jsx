import axios from 'axios';

const customerBaseUrl = "http://localhost:9000/api/customer/";

export const fetchCustomersList = () => {
    return axios.get(customerBaseUrl);
}

export const postCustomer = (customer) => {
    return axios.post(`${customerBaseUrl}/signUp`, customer);
}

export const putCustomer = (customer, customerId) => {
    return axios.put(`${customerBaseUrl}/${customerId}`, customer);
}

export const deleteCustomerApi = (customerId) => {
    return axios.delete(`${customerBaseUrl}/${customerId}`);
}