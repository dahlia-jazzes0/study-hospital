import { useEffect, useState } from 'react';
import { API_CONFIG } from './config';

export function useDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.DOCTORS}`,
          {
            method: 'GET',
            headers: {
              ...API_CONFIG.HEADERS,
            },
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
    };

    fetchDoctors();
  }, []);

  return { doctors, isLoading };
}
