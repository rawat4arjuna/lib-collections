import { useState, useEffect, useRef } from 'react';

function useRexoraPolling<T>(
  asyncFunction: () => Promise<T>,
  interval: number,
  dependencies: any[] = []
): { data: T | null; loading: boolean; error: any; startPolling: () => void; stopPolling: () => void } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const intervalRef = useRef<number | null>(null);
  const isMounted = useRef<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await asyncFunction();
      if (isMounted.current) {
        setData(result);
      }
    } catch (err) {
      if (isMounted.current) {
        setError(err);
      }
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  };

  const startPolling = () => {
    if (intervalRef.current === null) {
      fetchData(); // Initial fetch
      intervalRef.current = window.setInterval(fetchData, interval);
    }
  };

  const stopPolling = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    isMounted.current = true;
    startPolling();

    return () => {
      isMounted.current = false;
      stopPolling();
    };
  }, [interval, ...dependencies]); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading, error, startPolling, stopPolling };
}

export default useRexoraPolling;