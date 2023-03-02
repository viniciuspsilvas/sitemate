import React, { useEffect, useState } from "react";

const API_KEY = "183daca270264bad86fc5b72972fb82a";

interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

export const useFetch = (q: string | null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${q}&from=2023-02-02&sortBy=popularity&apiKey=${API_KEY}`
        );

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (q) fetchData();
  }, [q]);

  return { data, error, isLoading };
};
