import fetcher from 'src/lib/fetcher';
import useSWR from 'swr';
import { MutatorCallback } from 'swr/dist/types';

interface SwrData<T = unknown> {
  data?: T | null;
  loading: boolean;
  error?: string | Error | null;
  mutate?: (
    data?: T | Promise<T> | MutatorCallback<T>,
    shouldRevalidate?: boolean
  ) => Promise<T | undefined>;
}

export const useRequest = <T,>(url: string): SwrData<T> => {
  const { data, error, mutate } = useSWR<T>(url, fetcher);
  return {
    data,
    error,
    mutate,
    loading: !data && !error,
  };
};
