// Build a custom hook in react hook for handling asynchronous data fetching

import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network Error Occured!");
        }
        const jsonResponse = await response.json();
        setData(jsonResponse);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (url) fetchData();
  }, [url]);

  return { data, loading, error };
}
