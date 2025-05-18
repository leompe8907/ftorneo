import api from './apiService';

const authService = {
    login: async (username, password) => {
        try {
            const response = await api.post('login/', { username, password });
            const { access } = response.data;
            localStorage.setItem('accessToken', access);
            return access;
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            throw error;
        }
    },

    logout: () => {
        localStorage.removeItem('accessToken');
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('accessToken');
    },
};

export default authService;
