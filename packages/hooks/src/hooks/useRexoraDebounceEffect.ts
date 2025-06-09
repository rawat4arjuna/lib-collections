import { useEffect, useRef } from 'react';

type EffectCallback = () => void | (() => void);

function useRexoraDebounceEffect(
  callback: EffectCallback,
  dependencies: React.DependencyList,
  delay: number,
): void {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cleanupRef = useRef<(() => void) | void>(undefined);

  useEffect(() => {
    // Clear the previous timeout on each dependency change
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout
    timeoutRef.current = setTimeout(() => {
      // Execute the callback and store the cleanup function
      cleanupRef.current = callback();
    }, delay);

    // Cleanup function for the effect
    return () => {
      // Clear the timeout if the component unmounts or dependencies change
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Execute the stored cleanup function from the callback
      if (cleanupRef.current && typeof cleanupRef.current === 'function') {
        cleanupRef.current();
      }
    };
  }, dependencies); // Re-run the effect only when dependencies change
}

export default useRexoraDebounceEffect;