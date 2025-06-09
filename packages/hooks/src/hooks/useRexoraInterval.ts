import { useEffect, useRef } from 'react';

function useRexoraInterval(callback: () => void, delay: number | null): () => void {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    // Return a no-op function if delay is null
    return () => {};
  }, [delay]);

  // Function to clear the interval manually
  const clearIntervalManually = useRef(() => {});

  useEffect(() => {
      if (delay !== null) {
          const id = setInterval(savedCallback.current, delay);
          clearIntervalManually.current = () => clearInterval(id);
          return () => clearInterval(id);
      }
      clearIntervalManually.current = () => {}; // No-op when delay is null
      return () => {};
  }, [delay]);


  return clearIntervalManually.current;
}

export default useRexoraInterval;