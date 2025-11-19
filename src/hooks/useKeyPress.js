import { useEffect } from 'react';

export function useKeyPress(key, fn = () => {}) {
  useEffect(() => {
    function onPress(e) {
      if (e.key === key) {
        fn();
      }
    }

    document.addEventListener('keydown', onPress);

    return () => {
      document.removeEventListener('keydown', onPress);
    };
  }, [key, fn]);
}
