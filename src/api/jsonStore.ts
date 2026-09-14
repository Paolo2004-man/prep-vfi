type Resource = 'progress' | 'program';

const STORAGE_PREFIX = 'prep-vfi:';

function storageKey(resource: Resource) {
  return `${STORAGE_PREFIX}${resource}`;
}

function looksLikeHtml(body: string) {
  const start = body.trimStart().slice(0, 15).toLowerCase();
  return start.startsWith('<!doctype') || start.startsWith('<html');
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

  const body = await response.text();

  if (!response.ok || looksLikeHtml(body)) {
    throw new Error(
      looksLikeHtml(body)
        ? `Errore HTTP ${response.status}`
        : body || `Errore HTTP ${response.status}`,
    );
  }

  return JSON.parse(body) as T;
}

/** Su GitHub Pages non c'è l'API Vite: si usa localStorage. In `npm run dev` si usano i file JSON. */
function useLocalStorage() {
  return import.meta.env.PROD;
}

export async function fetchJson<T>(resource: Resource): Promise<T> {
  if (useLocalStorage()) {
    return readLocal<T>(resource);
  }
  return requestJson<T>(`/api/${resource}`);
}

export async function saveJson<T>(resource: Resource, data: T): Promise<T> {
  if (useLocalStorage()) {
    return writeLocal(resource, data);
  }
  return requestJson<T>(`/api/${resource}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}
