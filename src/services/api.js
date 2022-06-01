import axios from "axios";

const api = axios.create({
  baseURL: 'https://628326ed92a6a5e4621ec6ba.mockapi.io/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

export const getProducts = () => {
  return api.get('/products');
};
export const getProductDetail = (id) => {
  return api.get(`/products/${id}`);
};
export const getComments = (id) => {
  return api.get(`/comment`);
};
export const createComments = (params) => {
  return api.post(`/comment`, params);
};
