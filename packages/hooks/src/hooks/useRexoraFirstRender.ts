import { useRef } from 'react';

function useRexoraFirstRender(): boolean {
  const isFirstRender = useRef(true);

  if (isFirstRender.current) {
    isFirstRender.current = false;
    return true;
  }

  return false;
}

export default useRexoraFirstRender;