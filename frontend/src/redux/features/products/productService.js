import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_REACT_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/products`;

// Create New Product
const createProduct = async formData => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

// Get ALl Products
const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a Product
const deleteProduct = async id => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

const productService = {
  createProduct,
  getAllProducts,
  deleteProduct,
};

export default productService;