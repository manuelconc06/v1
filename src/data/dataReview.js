import { useState, useEffect } from "react";

export const getReview = (valor) => {
  const [dataR, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/reviews?hotelId=" +
        valor
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { dataR, loading, error };
};

export const postReview = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/reviews",
      options
    );

    if (!response.ok) throw await response.json();

    return response.json();
  } catch (e) {
    console.log(e);
  }
};
