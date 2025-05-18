import { useEffect } from 'react';
import authService from '../Services/authService';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!authService.isAuthenticated()) {
            navigate('/signin')
        }
    }, []);
};

export default useAuth;