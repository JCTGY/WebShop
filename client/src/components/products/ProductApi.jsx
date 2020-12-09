import axios from 'axios';

export const fetchProductList = () => {
    return axios.get(`http://localhost:9000/api/product/product`);
}

export const fetchProductsByName = (term) => {
    return axios.get(`http://localhost:9000/api/product/product/search?name=${term}`);
}

export const fetchProductById = (id) => {
    return axios.get(`http://localhost:9000/api/product/product/${id}`);
}

export const postProductToCart = (product) => {
    return axios.post(`http://localhost:7063/v1/cart/create`, product);
}