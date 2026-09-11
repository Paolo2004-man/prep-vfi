import { useMemo } from 'react';
import type { ProgressEntry } from '../types';
import { useJsonFile } from './useJsonFile';

export function useProgress() {
  const { data: entries, setData: setEntries, loading, error } = useJsonFile<
    ProgressEntry[]
  >('progress', []);

  const addEntry = async (entry: Omit<ProgressEntry, 'id'>) => {
    const newEntry: ProgressEntry = {
      ...entry,
      id: crypto.randomUUID(),
    };
    await setEntries((prev) => [newEntry, ...prev]);
  };

  const removeEntry = async (id: string) => {
    await setEntries((prev) => prev.filter((e) => e.id !== id));
  };

  const clearAll = async () => {
    await setEntries([]);
  };

  const stats = useMemo(() => {
    const completed = entries.filter((e) => e.completed).length;
    const total = entries.length;
    const byCategory = entries.reduce<Record<string, number>>((acc, e) => {
      acc[e.category] = (acc[e.category] ?? 0) + 1;
      return acc;
    }, {});
    return { completed, total, byCategory };
  }, [entries]);

  return { entries, addEntry, removeEntry, clearAll, stats, loading, error };
}
