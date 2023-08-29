export async function api(url: string, opts: RequestInit = {}) {
  const res = await fetch(url, opts);

  const body = await res.json();

  return body;
}
