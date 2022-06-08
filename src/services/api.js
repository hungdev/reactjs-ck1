import axios from "axios";

const api = axios.create({
  baseURL: 'http://shoes.hungvu.net',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

export const getProducts = () => {
  return api.get('/get-products');
};
export const getProductDetail = (id) => {
  return api.get(`/product/${id}`);
};
export const getComments = (id) => {
  return api.get(`/comment`);
};
export const createComments = (params) => {
  return api.post(`/comment`, params);
};
