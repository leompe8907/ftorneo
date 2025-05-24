import axios from 'axios';
import {useError} from '../Components/ErrorContext'

// Configuración inicial de Axios
const api = axios.create({
    // Base URL dinámico según el entorno
    baseURL: 'http://localhost:8000/torneo/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor de solicitudes para agregar el token de autenticación
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    const isAuthRoute = config.url.includes('/login') || config.url.includes('/registro');

    if (token && !isAuthRoute) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

// Interceptor de respuestas para manejo global de errores
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    useError('No autorizado. Por favor, inicie sesión nuevamente.');
                    break;
                case 403:
                    useError('Acceso prohibido.');
                    break;
                case 500:
                    useError('Error interno del servidor.');
                    break;
                default:
                    useError(`Error desconocido: ${error.response.status}`);
            }
        } else {
            useError('No se recibió respuesta del servidor.');
        }
        return Promise.reject(error);
    }
);

export default api;
