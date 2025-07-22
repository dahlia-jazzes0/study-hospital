import { useCallback, useEffect, useState } from 'react';
import { API_CONFIG } from '../api/config';

// 의사 목록 조회
export function useGetDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDoctors = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.DOCTORS}`,
        {
          method: 'GET',
          headers: API_CONFIG.HEADERS,
        }
      );

      if (!response.ok) {
        throw new Error('Doctors 정보 조회 실패!');
      }

      const result = await response.json();
      setDoctors(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  return { doctors, isLoading };
}
