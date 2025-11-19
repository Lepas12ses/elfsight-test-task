import { useEffect, useRef } from 'react';

export function useClickOutside(fn = () => {}) {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    function onClick(e) {
      if (!ref.current.contains(e.target)) {
        fn();
      }
    }

    const timer = setTimeout(() => {
      document.addEventListener('click', onClick);
    });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', onClick);
    };
  }, [fn]);

  return ref;
}
