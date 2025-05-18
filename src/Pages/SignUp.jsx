import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../Services/apiService'; // Asegúrate de que este path sea correcto

export default function SignUp() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        alias: '',
        email: '',
        contraseña: '',
        confirmar_contraseña: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await api.post('registro/', formData);
            alert(response.data.mensaje);
            navigate('/signin');
        } catch (err) {
            if (err.response?.data?.errores) {
                const errores = err.response.data.errores;
                const mensajes = Object.values(errores).flat().join('\n');
                setError(mensajes);
            } else {
                setError('Error inesperado en el registro.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
            <h2>Registro</h2>
            {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
                <input name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
                <input name="alias" placeholder="Alias" value={formData.alias} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Correo" value={formData.email} onChange={handleChange} required />
                <input type="password" name="contraseña" placeholder="Contraseña" value={formData.contraseña} onChange={handleChange} required />
                <input type="password" name="confirmar_contraseña" placeholder="Confirmar Contraseña" value={formData.confirmar_contraseña} onChange={handleChange} required />

                <button type="submit" disabled={loading}>
                    {loading ? 'Registrando...' : 'Registrarse'}
                </button>
            </form>
        </div>
    );
}
