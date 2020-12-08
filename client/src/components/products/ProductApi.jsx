import axios from 'axios';

export const fetchProductList = (term, index) => {
    return axios.get(`http://localhost:7060/product/`);
}