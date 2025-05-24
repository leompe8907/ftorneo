import React, { useState } from 'react';
import api from '../Services/apiService';
import '../Static/Style/CrearTorneoModal.scss';

export default function CrearTorneoModal({ onClose }) {
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    modo: '',
    fecha_inicio: '',
    hora_inicio: '',
    jugadores: '',
    premio: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.nombre || !form.fecha_inicio || !form.hora_inicio || !form.modo || !form.jugadores) {
      alert('Completá todos los campos obligatorios.');
      return;
    }

    try {
      const payload = {
        nombre: form.nombre,
        descripcion: form.descripcion,
        modo: form.modo,
        fecha_inicio: form.fecha_inicio,
        hora_inicio: form.hora_inicio,
        integrantes: parseInt(form.jugadores),
        premio: form.premio
      };

      const response = await api.post('/torneos/', payload);
      console.log("Torneo creado con éxito:", response.data);
      onClose();
    } catch (error) {
      console.error("Error al crear torneo:", error.response?.data || error.message);
      alert("Hubo un error al crear el torneo.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        <h2>CREAR TORNEO</h2>
        <div className="form-grid">
          <div className="form-left">
            <input name="nombre" placeholder="NOMBRE TORNEO" onChange={handleChange} />
            <textarea name="descripcion" placeholder="DESCRIPCIÓN" onChange={handleChange}></textarea>
          </div>
          <div className="form-right">
            <select name="modo" onChange={handleChange}>
              <option value="">MODO</option>
              <option value="Bullet">Bullet</option>
              <option value="Standard">Standard</option>
              <option value="Rapido">Rapido</option>
              <option value="Blitz">Blitz</option>
            </select>
            <div className="config">
              <span className='informacion'> FECHA INICIO </span>
              <input type="date" name="fecha_inicio" onChange={handleChange} />
            </div>
            <div className="config">
              <span className="informacion"> HORA INICIO </span>
              <input type="time" name="hora_inicio" onChange={handleChange} />
            </div>
            <div className="config">
              <span className="informacion">JUGADORES</span>
              <input type="number" name="jugadores" placeholder="JUGADORES" onChange={handleChange} />
            </div>
            <div className="config">
              <span className="informacion">PREMIO</span>
              <input name="premio" placeholder="PREMIO" onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="form-buttons">
          <button className='onClose' onClick={onClose}>CANCELAR</button>
          <button className="crear" onClick={handleSubmit}>CREAR</button>
        </div>
      </div>
    </div>
  );
}
