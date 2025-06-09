import { useEffect, useLayoutEffect } from 'react';

const useRexoraIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useRexoraIsomorphicLayoutEffect;