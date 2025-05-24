import { useState, useEffect } from "react";
import api from "../Services/apiService";

export function usePollingTorneos(interval = 10000) {
  const [torneos, setTorneos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchTorneos = async () => {
      try {
        const response = await api.get("torneos/");
        if (isMounted) {
          setTorneos(response.data);
          setError("");
        }
      } catch (err) {
        if (isMounted) {
          console.log(err)
          if (err.response?.status === 404) {
            setTorneos([]);
            const mensaje = err.response?.data?.mensaje || "No hay torneos disponibles";
            setError(mensaje);
          } else {
            setError("Ocurrió un error al obtener los torneos");
          }
        }
      }
    };

    fetchTorneos();
    const intervalId = setInterval(fetchTorneos, interval);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [interval]);

  return { torneos, error };
}
