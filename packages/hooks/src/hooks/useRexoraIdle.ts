import { useEffect, useRef, useState } from 'react';

const DEFAULT_IDLE_TIMEOUT = 60000; // 1 minute

function useRexoraIdle(timeout: number = DEFAULT_IDLE_TIMEOUT): boolean {
  const [isIdle, setIsIdle] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleActivity = () => {
    setIsIdle(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsIdle(true);
    }, timeout);
  };

  useEffect(() => {
    handleActivity(); // Initialize the timer on mount

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('scroll', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('touchstart', handleActivity);
    window.addEventListener('touchmove', handleActivity);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      window.removeEventListener('touchmove', handleActivity);
    };
  }, [timeout]);

  return isIdle;
}

export default useRexoraIdle;