import React, { useState } from 'react';
import api from './apiService';
import ModalMessage from '../Components/Models';

export default function SomeComponent() {
  const [modalMsg, setModalMsg] = useState('');

  const fetchData = async (endpoint) => {
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        setModalMsg('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
        setTimeout(() => {
          window.location.href = '/login';
        }, 3000);
      } else {
        setModalMsg('Ocurrió un error al obtener los datos.');
      }
    }
  };

  return (
    <>
      <button onClick={() => fetchData('/algun-endpoint')}>Cargar Datos</button>
      <ModalMessage message={modalMsg} onClose={() => setModalMsg('')} />
    </>
  );
}
