import { useRef, useEffect } from 'react';

function useRexoraMounted(): boolean {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return mountedRef.current;
}

export default useRexoraMounted;