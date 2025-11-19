import { useCallback, useEffect } from 'react';

const ROOT = document.getElementById('root');

export function useScrollLock() {
  const lock = useCallback(() => {
    if (!ROOT) return;

    ROOT.style.overflowY = 'hidden';
  }, []);

  const unlock = useCallback(() => {
    if (!ROOT) return;

    ROOT.style.overflowY = 'auto';
  }, []);

  useEffect(() => {
    return () => {
      unlock();
    };
  }, [unlock]);

  return {
    lock,
    unlock
  };
}
