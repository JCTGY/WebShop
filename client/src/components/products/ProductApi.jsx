import axios from 'axios';

export const fetchProductList = (term, index) => {
    // return axios.get(`http://localhost:7060/product/`);
    return axios.get(`http://localhost:9000/api/product/product`);

}

export const fetchProductById = (id) => {
    return axios.get(`http://localhost:7060/product/${id}`);
}

export const postProductToCart = (product) => {
    return axios.post(`http://localhost:7063/v1/cart/create`, product);
}