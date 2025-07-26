export async function postAuthRefresh({ refreshToken }) {
  const response = await fetch(
    'https://hospital-api.dahlia-jazzes0.workers.dev/api/auth/refresh',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken }),
    }
  );
  const body = await response.json();
  if (!response.ok) throw body;
  return body;
}
