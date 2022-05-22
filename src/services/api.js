import axios from 'axios';

const BASE_URL = "https://fakestoreapi.com";

const getAllProducts = async() => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
}

const getSpecialProducts = async() => {
    const response = await axios.get(`${BASE_URL}/products?limit=4`);
    return response.data;
}

export { getAllProducts, getSpecialProducts };