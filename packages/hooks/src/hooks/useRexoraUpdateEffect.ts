import { useEffect, useRef } from 'react';

type EffectCallback = () => void | (() => void);
type DependencyList = React.DependencyList;

const useRexoraUpdateEffect = (callback: EffectCallback, dependencies?: DependencyList) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    return callback();
  }, dependencies);
};

export default useRexoraUpdateEffect;