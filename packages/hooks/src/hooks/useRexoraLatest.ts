import { useRef } from 'react';

function useRexoraLatest<T>(value: T): { readonly current: T } {
  const ref = useRef(value);

  ref.current = value;

  return ref;
}

export default useRexoraLatest;