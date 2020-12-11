import axios from 'axios';

const productBaseUrl = "http://localhost:9000/api/product";

export const fetchProductList = () => {
    return axios.get(productBaseUrl);
}

export const fetchProductsByName = (term) => {
    return axios.get(`${productBaseUrl}/search?name=${term}`);
}

export const fetchProductById = (id) => {
    return axios.get(`${productBaseUrl}/${id}`);
}

export const postProduct = (product) => {
    return axios.post(`${productBaseUrl}`, product);
}

export const putProduct = (product, productId) => {
    return axios.put(`${productBaseUrl}/${productId}`, product);
}

export const deleteProductApi = (productId) => {
    return axios.delete(`${productBaseUrl}/${productId}`);
}


export const postProductToCart = (product, cartId) => {
    product = {
        ...product,
        cart: {
            cartId: cartId
        }
    }
    return axios.put(`http://localhost:9000/api/cart/v1/cart/update/addProductToCart/${cartId}`, product);
}