import axios from 'axios';

const baseUrl = "http://localhost:9000/api/product/";

export const fetchProductList = () => {
    return axios.get(baseUrl);
}

export const fetchProductsByName = (term) => {
    return axios.get(`${baseUrl}/search?name=${term}`);
}

export const fetchProductById = (id) => {
    return axios.get(`${baseUrl}/${id}`);
}

export const postProduct = (product) => {
    return axios.post(`${baseUrl}`, product);
}

export const putProduct = (product, productId) => {
    return axios.put(`${baseUrl}/${productId}`, product);
}

export const deleteProductApi = (productId) => {
    return axios.delete(`${baseUrl}/${productId}`);
}


export const postProductToCart = (product) => {
    return axios.post(`http://localhost:7063/v1/cart/create`, product);
}