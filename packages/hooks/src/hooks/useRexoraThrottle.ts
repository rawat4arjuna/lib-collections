import { useState, useRef, useEffect, useCallback } from 'react';

// A basic throttle utility function
function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): T {
  let inThrottle = false;
  let lastResult: ReturnType<T>;
  let lastArgs: Parameters<T>;
  let timerId: ReturnType<typeof setTimeout> | null = null;

  const throttled = useCallback(
    (...args: Parameters<T>): ReturnType<T> => {
      lastArgs = args;
      if (!inThrottle) {
        inThrottle = true;
        lastResult = func(...lastArgs);
        timerId = setTimeout(() => {
          inThrottle = false;
        }, delay);
      }
      return lastResult;
    },
    [func, delay]
  );

  // Add a cancel method for cleanup
  (throttled as any).cancel = () => {
    if (timerId) {
      clearTimeout(timerId);
    }
    inThrottle = false;
  };

  return throttled as T;
}

function useRexoraThrottle<T>(value: T, delay: number): T;
function useRexoraThrottle<T extends (...args: any[]) => any>(func: T, delay: number): T & { cancel: () => void };

function useRexoraThrottle<T>(valueOrFunc: T, delay: number): T | (T extends (...args: any[]) => any ? T & { cancel: () => void } : never) {
  const [throttledValue, setThrottledValue] = useState(valueOrFunc);
  const isFunction = typeof valueOrFunc === 'function';

  const throttledFuncRef = useRef<T extends (...args: any[]) => any ? T & { cancel: () => void } : null>(null);

  useEffect(() => {
    if (isFunction) {
      const newThrottledFunc = throttle(valueOrFunc as any, delay);
      throttledFuncRef.current = newThrottledFunc;
      return () => {
        if (throttledFuncRef.current && (throttledFuncRef.current as any).cancel) {
          (throttledFuncRef.current as any).cancel();
        }
      };
    } else {
      const handler = setTimeout(() => {
        setThrottledValue(valueOrFunc);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }
  }, [valueOrFunc, delay, isFunction]);

  if (isFunction) {
    return throttledFuncRef.current as any;
  } else {
    return throttledValue as any;
  }
}

export default useRexoraThrottle;