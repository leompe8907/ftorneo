import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../Services/apiService';
import logo from '../Static/Img/Logo.svg';
import '../Static/Style/SingUp.scss';

export default function SignUp() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [alias, setAlias] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [cContraseña, setCContraseña] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [verPassword, setVerPassword] = useState(false);
  const [verConfirm, setVerConfirm] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!aceptaTerminos) {
      alert("Debes aceptar los términos y condiciones");
      return;
    }

    try {
      const response = await api.post('registro/', {
        nombre,
        apellido,
        alias,
        email,
        contraseña,
        confirmar_contraseña: cContraseña,
      });
      alert(response.data.mensaje);
      navigate('/signin');
    } catch (err) {
      if (err.response?.data) {
        const errores = Object.values(err.response.data).flat().join('\n');
        alert(errores);
      }
    }
  };

  return (
    <div className="containner-register-general">
      <div className="containner-register-interno">
        <img src={logo} alt="logo" className="logo" />
        <form onSubmit={handleSubmit}>
          <div className="inputNombre">
            <h4 className="tittle-input">NOMBRE</h4>
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </div>
          <div className="inputNombre">
            <h4 className="tittle-input">APELLIDO</h4>
            <input value={apellido} onChange={(e) => setApellido(e.target.value)} required />
          </div>
          <div className="inputNombre">
            <h4 className="tittle-input">NOMBRE DE USUARIO</h4>
            <input value={alias} onChange={(e) => setAlias(e.target.value)} required />
          </div>
          <div className="inputNombre">
            <h4 className="tittle-input">EMAIL</h4>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="inputNombre">
            <h4 className="tittle-input">CONTRASEÑA</h4>
            <div className="password-container">
              <input
                type={verPassword ? "text" : "password"}
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                required
              />
              <button type="button" onClick={() => setVerPassword(!verPassword)}>👁</button>
            </div>
          </div>
          <div className="inputNombre">
            <h4 className="tittle-input">REPETIR CONTRASEÑA</h4>
            <div className="password-container">
              <input
                type={verConfirm ? "text" : "password"}
                value={cContraseña}
                onChange={(e) => setCContraseña(e.target.value)}
                required
              />
              <button type="button" onClick={() => setVerConfirm(!verConfirm)}>👁</button>
            </div>
          </div>

          <div className="terminos">
            LEÍ Y ACEPTO LOS TÉRMINOS Y CONDICIONES
            
            <input
              type="checkbox"
              checked={aceptaTerminos}
              onChange={(e) => setAceptaTerminos(e.target.checked)}
            />
            
          </div>

          <div className="botones-finales terminos">
            <button type="submit" className="submit-btn">SUBMIT</button>
            <button type="button" className="btn-condiciones">TÉRMINOS Y CONDIC</button>
          </div>
        </form>

        <div className="acciones-secundarias">
          <p>¿YA TENÉS CUENTA? <span className="link" onClick={() => navigate('/signin')}>INICIÁ SESIÓN</span></p>
          <p>¿OLVIDASTE TU CONTRASEÑA? <span className="link">RESETEALA</span></p>
        </div>
      </div>
    </div>
  );
}
