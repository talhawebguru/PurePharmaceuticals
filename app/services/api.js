import axios from 'axios';

// Create an instance of axios with default settings
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, 
  headers: {
    'Content-Type': 'application/json',
    // 'ngrok-skip-browser-warning': 'true'
  },
});

// Function to get products
export const getProducts = async () => {
  try {
    const response = await api.get('/api/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Function to get categories
export const getCategories = async () => {
  try {
    const response = await api.get('/api/categories?populate=*');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getProductsByCategory = async (categorySlug) => {
  try {
    const response = await api.get(`/api/products?populate=*&filters[categories][slug][$eq]=${categorySlug}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

export const getProductBySlug = async (productSlug) => {
  try {
    const response = await api.get(`/api/products?populate=*&filters[slug][$eq]=${productSlug}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

// Function to get home metadata
export const getHomeMetadata = async () => {
  try {
    const response = await api.get('/api/home');
    return response.data;
  } catch (error) {
    console.error('Error fetching home metadata:', error);
    throw error;
  }
};

// Function to get about metadata
export const getAboutMetadata = async () => {
  try {
    const response = await api.get('/api/about');
    return response.data;
  } catch (error) {
    console.error('Error fetching about metadata:', error);
    throw error;
  }
};
export const getAboutCorporateMetadata = async () => {
  try {
    const response = await api.get('/api/about-corporate');
    return response.data;
  } catch (error) {
    console.error('Error fetching about metadata:', error);
    throw error;
  }
};

// Function to get contact metadata
export const getContactMetadata = async () => {
  try {
    const response = await api.get('/api/contact');
    return response.data;
  } catch (error) {
    console.error('Error fetching contact metadata:', error);
    throw error;
  }
};

// Function to get career metadata
export const getCareerMetadata = async () => {
  try {
    const response = await api.get('/api/career');
    return response.data;
  } catch (error) {
    console.error('Error fetching career metadata:', error);
    throw error;
  }
};

// Function to get news metadata
export const getNewsMetadata = async () => {
  try {
    const response = await api.get('/api/new');
    return response.data;
  } catch (error) {
    console.error('Error fetching news metadata:', error);
    throw error;
  }
};

// Function to get static product page metadata
export const getProductPageMetadata = async () => {
  try {
    const response = await api.get('/api/productpage');
    return response.data;
  } catch (error) {
    console.error('Error fetching product page metadata:', error);
    throw error;
  }
};

export default api;