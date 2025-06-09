import { useState } from 'react';

type UseRexoraBooleanReturn = [boolean, { on: () => void; off: () => void; toggle: () => void }];

function useRexoraBoolean(initialValue: boolean = false): UseRexoraBooleanReturn {
  const [value, setValue] = useState<boolean>(initialValue);

  const on = () => setValue(true);
  const off = () => setValue(false);
  const toggle = () => setValue(prev => !prev);

  return [value, { on, off, toggle }];
}

export default useRexoraBoolean;