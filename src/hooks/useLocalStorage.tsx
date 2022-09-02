// Modified from https://github.com/streamich/react-use/blob/e53ca94a0b1f20270b0f75dc2ca1fecf1e119dde/src/useLocalStorage.ts

import { useCallback, useState, useRef } from 'react';
import type { Dispatch, SetStateAction } from 'react';

const noop = (): void => {};

const useLocalStorage = <T = string,>(
  key: string,
  initialValue?: T
): [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => void] => {
  if (typeof window === 'undefined' || typeof window.Storage === 'undefined') {
    // immediately return a "dummy" hook instead of throwing an error if localStorage isn't available, either in the
    // browser or because this hook is being called server-side.
    return [initialValue as T, noop, noop];
  }

  // TODO: make these customizable (e.g. `JSON.stringify()` and `JSON.parse()`)
  const serializer = (value: T | undefined): string => String(value);
  const deserializer = (value: string): T => value as unknown as T;

  const initializer = useRef((key: string) => {
    try {
      // deserialize and return existing value if it's already been set
      const storedValue = window.localStorage.getItem(key);
      if (storedValue !== null) {
        return deserializer(storedValue);
      }

      // item hasn't been set, but immediately set it to initialValue if provided
      if (initialValue) {
        window.localStorage.setItem(key, serializer(initialValue));
        return initialValue;
      }
    } catch (error) {
      return initialValue;
    }
  });

  const [state, setState] = useState<T | undefined>(() =>
    initializer.current(key)
  );

  const set: Dispatch<SetStateAction<T | undefined>> = useCallback(
    (valOrFunc) => {
      try {
        // we need to support both T and (prevState: T) => T
        const newState =
          valOrFunc instanceof Function ? valOrFunc(state) : valOrFunc;

        window.localStorage.setItem(key, serializer(newState));
        setState(newState);
      } catch (error) {
        console.error(`failed to set localStorage item '${key}':`, error);
      }
    },
    [key, state]
  );

  const remove = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      setState(undefined);
    } catch (error) {}
  }, [key]);

  return [state, set, remove];
};

export default useLocalStorage;
