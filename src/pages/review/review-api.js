const API_BASE_URL =
  'https://hospital-api.dahlia-jazzes0.workers.dev/api/articles/';

function createHeaders() {
  const headers = { 'Content-Type': 'application/json' };
  const token = localStorage.getItem('accessToken');
  if (token) headers['Authorization'] = `Bearer ${token}`;
  return headers;
}

export async function fetchReviewsFromApi({
  page = 1,
  limit = 6,
  search = '',
  department = '',
}) {
  const params = new URLSearchParams({ page, limit, search, department });
  const url = `${API_BASE_URL}?${params}`;

  const res = await fetch(url, { headers: createHeaders() });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `리뷰 데이터를 불러오지 못했습니다: ${res.status} - ${errorText}`
    );
  }

  return await res.json();
}

// 🔍 리뷰 상세 불러오기
export async function getReviewDetail(id) {
  const url = `${API_BASE_URL}${id}`;
  const res = await fetch(url, { headers: createHeaders() });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `리뷰 상세를 불러오지 못했습니다: ${res.status} - ${errorText}`
    );
  }

  return await res.json();
}
