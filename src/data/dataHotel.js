import { useState, useEffect } from "react";

export const getHoteles = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
      fetch("https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { data, loading, error };
}

export const getHotel = (valor) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
      fetch("https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels/"+ valor)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
   
    
  }, []);
  return { data, loading, error };
}


