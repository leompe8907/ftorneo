import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Static/Style/Navbar.scss';

import logo from '../Static/Img/Logo.svg';
import backIcon from '../Static/Img/BACK.png';
import bugsIcon from '../Static/Img/BUGS.png';
import infoIcon from '../Static/Img/INFO.png';
import listIcon from '../Static/Img/ANUNCIOS.png';
import configIcon from '../Static/Img/CONFIG.png';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      {/* Sección izquierda */}
      <div className="navbar-left">
        <img src={backIcon} alt="Volver" className="icon" onClick={() => navigate(-1)} />
      </div>

      {/* Sección derecha */}
      <div className="navbar-right">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="navbar-icons">
        <img src={bugsIcon} alt="Usuario" className="icon" />
        <img src={infoIcon} alt="Info" className="icon" />
        <img src={listIcon} alt="Anuncios" className="icon" />
        <img src={configIcon} alt="Configuración" className="icon" />
        </div>
      </div>
    </div>
  );
}
