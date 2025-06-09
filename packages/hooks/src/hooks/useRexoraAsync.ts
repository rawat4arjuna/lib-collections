import { useState, useEffect, useCallback } from 'react';

type AsyncFunction<T> = () => Promise<T>;

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useRexoraAsync<T>(asyncFunction: AsyncFunction<T>): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const execute = useCallback(() => {
    setState({ data: null, loading: true, error: null });
    asyncFunction()
      .then((data) => {
        setState({ data, loading: false, error: null });
      })
      .catch((error) => {
        setState({ data: null, loading: false, error });
      });
  }, [asyncFunction]);

  useEffect(() => {
    execute();
  }, [execute]); // Re-run effect if the execute function changes (due to asyncFunction changing)

  return state;
}

export default useRexoraAsync;