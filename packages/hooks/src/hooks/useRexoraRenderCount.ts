import { useRef } from 'react';

function useRexoraRenderCount() {
  const renderCount = useRef(0);

  renderCount.current++;

  return renderCount.current;
}

export default useRexoraRenderCount;