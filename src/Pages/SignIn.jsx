import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../Services/authService';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await authService.login(email, contraseña);
            navigate('/index');
        } catch (error) {
            alert('Credenciales inválidas');
        }
    };

    return (
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo" />
            <input value={contraseña} onChange={(e) => setContraseña(e.target.value)} type="password" placeholder="Contraseña" />
            <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    );
}
