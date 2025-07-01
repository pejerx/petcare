import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/cart';

// Helper for JWT auth header
const authHeader = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

// CREATE: Add an item to the cart
export const addToCart = (item) => {
  return axios.post(`${API_BASE}/add`, item, authHeader());
};

// READ: Get all cart items for the current user
export const getCartItems = () => {
  return axios.get(API_BASE, authHeader());
};

// UPDATE: Update a cart item by ID
export const updateCartItem = (id, quantity) => {
  return axios.put(`${API_BASE}/update/${id}`, { quantity }, authHeader());
};

// DELETE: Remove a cart item by ID
export const deleteCartItem = (id) => {
  return axios.delete(`${API_BASE}/delete/${id}`, authHeader());
};
