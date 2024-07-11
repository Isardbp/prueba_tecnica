import axios from 'axios';
import { UserData, Product } from './types'; 

export const fetchUserData = async (): Promise<UserData> => {
  try {
    const response = await axios.get<UserData>("http://localhost:3001/user");
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>("http://localhost:3001/products");
    return response.data;
  } catch (error) {
    console.error('Error fetching products data:', error);
    throw error;
  }
};