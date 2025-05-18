import api from './apiService';

const fetchData = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        if (error.response?.status === 401) {
            console.error('No autorizado. Redirigiendo al inicio de sesión.');
            alert('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
            window.location.href = '/login';
        } else {
            console.error('Error al obtener datos:', error);
            throw error;
        }
    }
};

export default fetchData;
