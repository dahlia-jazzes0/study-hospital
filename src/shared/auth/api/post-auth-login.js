export async function postAuthLogin({ username, password }) {
  const response = await fetch(
    'https://hospital-api.dahlia-jazzes0.workers.dev/api/auth/login',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    }
  );
  const body = await response.json();
  if (!response.ok) throw body;
  return body;
}
