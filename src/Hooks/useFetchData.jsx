import { useState, useEffect } from 'react';
import api from '../Services/apiService';
import axios from 'axios';

const useFetchData = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!endpoint) return;

    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setLoading(true);
      setError(null); 
      try {
        const response = await api.get(endpoint, { cancelToken: source.token });
        setData(response.data);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => source.cancel('Solicitud cancelada por desmontaje.');
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchData;
