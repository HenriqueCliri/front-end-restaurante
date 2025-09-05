import axios from 'axios';

const API_URL = 'http://192.168.1.8:8080/api/v1';

export const addToCart = async (productId,quantity) => {
    try {
        const response = await axios.port(`${API_URL}/orders/add-item`, {
            productId,
            quantity
        });
        return response.data;
    } catch (err) {
        console.error("Erro ao adicionar ao carrinho:", err);
        throw err;
    }
};