import { useState, useCallback } from 'react';

function useRexoraForceUpdate(): () => void {
  const [, setState] = useState(0);

  const forceUpdate = useCallback(() => {
    setState(prev => prev + 1);
  }, []);

  return forceUpdate;
}

export default useRexoraForceUpdate;