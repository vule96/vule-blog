import { useEffect, useState } from 'react';

const useMedia = (query: string, defaultState?: boolean): boolean => {
  const [state, setState] = useState(() => {
    if (defaultState !== undefined) {
      return defaultState;
    }

    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }

    return false;
  });

  useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    const onChange = (): void => {
      if (!mounted) {
        return;
      }
      setState(!!mql.matches);
    };

    mql.addEventListener('change', onChange);
    setState(mql.matches);

    return () => {
      mounted = false;

      mql.removeEventListener('change', onChange);
    };
  }, [query]);

  return state;
};

export default useMedia;
