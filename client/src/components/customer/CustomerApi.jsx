import axios from 'axios';

const customerBaseUrl = "http://localhost:9000/api/customer/";

export const fetchCustomersList = () => {
    return axios.get(customerBaseUrl);
}