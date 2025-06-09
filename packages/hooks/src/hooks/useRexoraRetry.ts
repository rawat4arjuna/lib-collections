import { useState, useEffect, useRef, useCallback } from 'react';

interface RetryOptions {
  retries: number;
  delay: number; // in milliseconds
}

interface UseRexoraRetryResult<T> {
  data: T | undefined;
  loading: boolean;
  error: any;
  retry: () => void;
}

function useRexoraRetry<T>(
  asyncFunction: () => Promise<T>,
  options: RetryOptions = { retries: 3, delay: 1000 },
  dependencies: React.DependencyList = []
): UseRexoraRetryResult<T> {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [retryCount, setRetryCount] = useState<number>(0);

  const isMounted = useRef(true);
  const asyncFunctionRef = useRef(asyncFunction);

  useEffect(() => {
    asyncFunctionRef.current = asyncFunction;
  }, [asyncFunction]);

  const executeAsyncFunction = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await asyncFunctionRef.current();
      if (isMounted.current) {
        setData(result);
        setLoading(false);
      }
    } catch (err) {
      if (isMounted.current) {
        setError(err);
        setLoading(false);
      }
    }
  }, [retryCount]); // Depend on retryCount to re-run when manually retried

  useEffect(() => {
    isMounted.current = true;
    let currentRetry = 0;

    const runWithRetry = async () => {
      while (currentRetry <= options.retries) {
        try {
          const result = await asyncFunction();
          if (isMounted.current) {
            setData(result);
            setLoading(false);
            setError(null);
          }
          return; // Success, stop retrying
        } catch (err) {
          if (isMounted.current) {
            setError(err);
          }
          currentRetry++;
          if (currentRetry <= options.retries) {
            await new Promise(resolve => setTimeout(resolve, options.delay));
          } else {
             if (isMounted.current) {
               setLoading(false);
             }
          }
        }
      }
    };

    runWithRetry();

    return () => {
      isMounted.current = false;
    };
  }, [...dependencies, options.retries, options.delay, retryCount]); // Added retryCount to dependencies to handle manual retry

  const retry = useCallback(() => {
    setRetryCount(prev => prev + 1);
  }, []);

  return { data, loading, error, retry };
}

export default useRexoraRetry;