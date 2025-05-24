import React from 'react';
import '../Static/Style/Footer.scss'

import iconTorneo from '../Static/Img/Custom Tournament.png';
import textoTorneos from '../Static/Img/TORNEOS.png';

export default function Footer() {
  return (
    <div className="footer">
      <img src={iconTorneo} alt="Torneo Icono" className="footer-icon" />
      {/* <img src={textoTorneos} alt="Texto Torneos" className="footer-text" /> */}
      <p>TORNEOS</p>
    </div>
  );
}
