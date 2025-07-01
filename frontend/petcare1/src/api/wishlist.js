import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/wishlist';

// Helper for JWT auth header
const authHeader = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

// CREATE: Add an item to the wishlist
export const addToWishlist = (item) => {
  return axios.post(`${API_BASE}/add`, item, authHeader());
};

// READ: Get all wishlist items for the current user
export const getWishlistItems = () => {
  return axios.get(API_BASE, authHeader());
};

// DELETE: Remove a wishlist item by ID
export const deleteWishlistItem = (id) => {
  return axios.delete(`${API_BASE}/delete/${id}`, authHeader());
};
