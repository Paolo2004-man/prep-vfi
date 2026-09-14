type Resource = 'progress' | 'program';

const STORAGE_PREFIX = 'prep-vfi:';

function storageKey(resource: Resource) {
  return `${STORAGE_PREFIX}${resource}`;
}

function isLocalDevHost() {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname;
  return host === 'localhost' || host === '127.0.0.1';
}

function readLocal<T>(resource: Resource): T {
  try {
    const raw = localStorage.getItem(storageKey(resource));
    return raw ? (JSON.parse(raw) as T) : ([] as T);
  } catch {
    return [] as T;
  }
}

function writeLocal<T>(resource: Resource, data: T): T {
  localStorage.setItem(storageKey(resource), JSON.stringify(data));
  return data;
}

async function requestJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...(init?.headers ?? {}) },
    ...init,
  });

  const contentType = response.headers.get('content-type') ?? '';
  const body = await response.text();

  if (!response.ok || !contentType.includes('application/json')) {
    throw new Error('Salvataggio file JSON disponibile solo in locale con npm run dev.');
  }

  return JSON.parse(body) as T;
}

export async function fetchJson<T>(resource: Resource): Promise<T> {
  if (isLocalDevHost()) {
    try {
      return await requestJson<T>(`/api/${resource}`);
    } catch {
      return readLocal<T>(resource);
    }
  }
  return readLocal<T>(resource);
}

export async function saveJson<T>(resource: Resource, data: T): Promise<T> {
  if (isLocalDevHost()) {
    try {
      return await requestJson<T>(`/api/${resource}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
    } catch {
      return writeLocal(resource, data);
    }
  }
  return writeLocal(resource, data);
}
