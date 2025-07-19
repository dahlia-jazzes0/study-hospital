const API_BASE_URL =
  'https://hospital-api.dahlia-jazzes0.workers.dev/api/articles/';

export async function fetchReviewsFromApi({
  page = 1,
  limit = 6,
  search = '',
  department = '',
}) {
  const headers = {
    'Content-Type': 'application/json',
  };

  const token = localStorage.getItem('accessToken');
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const params = new URLSearchParams({ page, limit, search, department });
  const res = await fetch(`${API_BASE_URL}?${params}`, { headers });

  if (!res.ok) {
    throw new Error('리뷰 데이터를 불러오지 못했습니다');
  }

  return await res.json();
}
