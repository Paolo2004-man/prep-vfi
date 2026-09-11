async function requestJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...(init?.headers ?? {}) },
    ...init,
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(body || `Errore HTTP ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function fetchJson<T>(resource: 'progress' | 'program'): Promise<T> {
  return requestJson<T>(`/api/${resource}`);
}

export function saveJson<T>(resource: 'progress' | 'program', data: T): Promise<T> {
  return requestJson<T>(`/api/${resource}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}
