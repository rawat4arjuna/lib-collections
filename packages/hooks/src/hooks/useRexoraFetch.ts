import { useState, useEffect } from 'react';

interface UseRexoraFetchOptions extends RequestInit {
  // Add any custom options here if needed
}

interface UseRexoraFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useRexoraFetch<T = any>(
  url: string,
  options?: UseRexoraFetchOptions
): UseRexoraFetchReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]); // Dependencies array

  return { data, loading, error };
}

export default useRexoraFetch;