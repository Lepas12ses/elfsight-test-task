import { useEffect, useRef } from 'react';

export function useClickOutside(fn = () => {}) {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    function onClick(e) {
      if (e.target.contains(ref.current)) {
        fn();
      }
    }

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [fn]);

  return ref;
}
