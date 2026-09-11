import { useCallback, useEffect, useState } from 'react';
import { fetchJson, saveJson } from '../api/jsonStore';

type Resource = 'progress' | 'program';

export function useJsonFile<T>(resource: Resource, initialValue: T) {
  const [data, setData] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const remote = await fetchJson<T>(resource);
        if (!cancelled) {
          setData(remote);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Impossibile leggere il JSON');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [resource]);

  const setAndPersist = useCallback(
    async (value: T | ((prev: T) => T)) => {
      setData((prev) => {
        const next = value instanceof Function ? value(prev) : value;

        void (async () => {
          try {
            await saveJson(resource, next);
            setError(null);
          } catch (err) {
            setError(err instanceof Error ? err.message : 'Impossibile salvare il JSON');
          }
        })();

        return next;
      });
    },
    [resource],
  );

  return { data, setData: setAndPersist, loading, error } as const;
}
