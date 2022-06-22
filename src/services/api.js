import axios from "axios";

const api = axios.create({
  baseURL: 'http://shoes.hungvu.net',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

export const getProducts = (params) => {
  return api.get('/get-products', { params });
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
export const getGender = (params) => {
  return api.get(`/get-genders`, params);
};

// fake data
const fakeProductData = [
  { id: 1, name: 'Nike', price: 100000, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Adidas', price: 200000, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Vans', price: 300000, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Puma', price: 400000, image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Converse', price: 500000, image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Asics', price: 600000, image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'New Balance', price: 700000, image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Lacoste', price: 800000, image: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Gucci', price: 900000, image: 'https://via.placeholder.com/150' },
  { id: 10, name: 'Fendi', price: 1000000, image: 'https://via.placeholder.com/150' },
];
export const getFakeProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fakeProductData);
    }, 1000);
  });
};
