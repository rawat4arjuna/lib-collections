import { useState, useEffect } from 'react';

type VisibilityState = 'visible' | 'hidden' | 'prerender' | 'unloaded';

function useRexoraDocumentVisibility(): VisibilityState {
  const [visibilityState, setVisibilityState] = useState<VisibilityState>(() => document.visibilityState as VisibilityState);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setVisibilityState(document.visibilityState as VisibilityState);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return visibilityState;
}

export default useRexoraDocumentVisibility;