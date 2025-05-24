import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { usePollingTorneos } from '../Hooks/usePollingTorneos';

import CrearTorneoModal from '../Components/CrearTorneoModal';
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

import '../Static/Style/Torneo.scss'; // Asegúrate de tener el estilo importado

export default function Torneo() {

  const [mostrarModal, setMostrarModal] = useState(false);

  const navigate = useNavigate();
  const { torneos, error } = usePollingTorneos(10000); // cada 10 segundos


  return (
    <>
      <div className="containner-general-torneo">
        <NavBar/>
        <div className="torneos-container">
          <div className="torneos-lista">
            {torneos.length === 0 && error ? (
              <div className="mensaje-vacio">{error}</div>
            ) : (
              <table className="tabla-torneos">
                <thead>
                  <tr>
                    <th>TORNEO</th>
                    <th>FECHA DE INICIO</th>
                    <th>Modo</th>
                    <th>Premio</th>
                  </tr>
                </thead>
                <tbody>
                  {torneos.map(t => (
                    <tr key={t.id}>
                      <td>{t.nombre}</td>
                      <td>{t.fecha_inicio} - {t.hora_inicio}</td>
                      <td>{t.modo}</td>
                      <td>{t.premio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="torneos-acciones">
            <button className="btn-crear" onClick={() => setMostrarModal(true)}>CREAR</button>
          </div>
        </div>
        {mostrarModal && <CrearTorneoModal onClose={() => setMostrarModal(false)} />}
        <Footer/>
      </div>
    </>
  );
}
