import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/products';

// CREATE: Add a new product
export const createProduct = (product) => {
  return axios.post(API_BASE, product);
};

// READ: Get all products
export const getProducts = () => {
  return axios.get(API_BASE);
};

// READ: Get a single product by ID
export const getProductById = (id) => {
  return axios.get(`${API_BASE}/${id}`);
};

// UPDATE: Update an existing product by ID
export const updateProduct = (id, updatedProduct) => {
  return axios.put(`${API_BASE}/${id}`, updatedProduct);
};

// DELETE: Delete a product by ID
export const deleteProduct = (id) => {
  return axios.delete(`${API_BASE}/${id}`);
};
