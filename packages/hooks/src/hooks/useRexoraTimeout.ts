import { useEffect, useRef } from 'react';

function useRexoraTimeout(callback: () => void, delay: number | null): () => void {
  const savedCallback = useRef(callback);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout.
  useEffect(() => {
    if (delay !== null) {
      const id = setTimeout(() => savedCallback.current(), delay);
      timeoutId.current = id;
      return () => clearTimeout(id);
    }
    return () => {}; // No-op cleanup if delay is null
  }, [delay]);

  const clear = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null;
    }
  };

  return clear;
}

export default useRexoraTimeout;