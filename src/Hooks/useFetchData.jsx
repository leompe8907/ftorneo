import { useState, useEffect } from 'react';
import api from '../Services/apiService';
import axios from 'axios';

const useFetchData = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // Inicialmente no está cargando
  const [error, setError] = useState(null);

  useEffect(() => {
    // Verifica si el endpoint es válido antes de realizar la solicitud
    if (!endpoint) return;

    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setLoading(true); // Activa el estado de carga al iniciar la solicitud
      setError(null);   // Resetea el error previo
      try {
        const response = await api.get(endpoint, { cancelToken: source.token });
        setData(response.data); // Actualiza los datos obtenidos
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err); // Guarda el error si no es una cancelación
        }
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchData();

    // Cancela la solicitud si el componente se desmonta
    return () => source.cancel('Solicitud cancelada por desmontaje.');
  }, [endpoint]); // Se ejecuta solo cuando el endpoint cambia

  return { data, loading, error };
};

export default useFetchData;
