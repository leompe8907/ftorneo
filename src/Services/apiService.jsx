import axios from 'axios';

// Configuración inicial de Axios
const api = axios.create({
    // Base URL dinámico según el entorno
    baseURL: 'http://localhost:8000/torneo/' || "",
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
    (response) => response,
    (error) => {
        if (error.response) {
            // Manejo de errores basados en el código de estado
            switch (error.response.status) {
                case 401:
                    alert('No autorizado. Por favor, inicie sesión nuevamente.');
                    break;
                case 403:
                    alert('Acceso prohibido. No tiene los permisos necesarios.');
                    break;
                case 500:
                    alert('Error interno del servidor. Por favor, intente más tarde.');
                    break;
                default:
                    alert(`Error desconocido: ${error.response.status}`);
            }
        } else if (error.request) {
            alert('No se recibió respuesta del servidor. Verifique su conexión a Internet.');
        } else {
            console.error('Error al configurar la solicitud:', error.message);
        }
        return Promise.reject(error);
    }
);

export default api;
