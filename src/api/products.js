import axios from 'axios';
const API_URL = 'http://192.168.1.8:8080/api/v1';

export const fetchAllProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar todos os produtos:", error);
        throw error;
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar produto com ID ${id}:`, error);
        throw error;
    }
};
