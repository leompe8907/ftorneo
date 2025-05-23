import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../Services/authService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import logo from "../Static/Img/Logo.svg"

import '../Static/Style/SingIn.scss';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [mostrarContraseña, setMostrarContraseña] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await authService.login(email, contraseña);
            navigate('/torneo');
        } catch (error) {
            alert('Credenciales inválidas');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <img className="logo" src={logo} alt="Logo"/>
                    <button className="close-btn">✖</button>
                </div>
                <label>Email</label>
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="Email" 
                />
                <label>Contraseña</label>
                <div className="password-wrapper">
                    <input 
                        value={contraseña} 
                        onChange={(e) => setContraseña(e.target.value)} 
                        type={mostrarContraseña ? 'text' : 'password'} 
                        placeholder="Contraseña" 
                    />
                    <FontAwesomeIcon 
                        icon={mostrarContraseña ? faEyeSlash : faEye}
                        className="eye-icon"
                        onClick={() => setMostrarContraseña(!mostrarContraseña)}
                    />
                </div>
                <div className="buttons">
                    <button className="submit-btn" onClick={handleLogin}>SUBMIT</button>
                    <button className="terms-btn">TÉRMINOS Y CONDIC</button>
                </div>
                <div className="links">
                    <p>YA TENÉS CUENTA? <span className="link">INICIÁ SESIÓN</span></p>
                    <p>OLVIDASTE TU CONTRASEÑA? <span className="link">RESETEALA</span></p>
                </div>
            </div>
        </div>
    );
}