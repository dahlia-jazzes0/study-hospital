import { useCallback, useEffect, useState } from 'react';
import { API_CONFIG } from '../config';

// 예약 정보 불러오기
export function useGetAppointment() {
  const [myAppointments, setMyAppointments] = useState([]);

  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyLTEiLCJ1c2VybmFtZSI6Im1pbnN1X2tpbSIsIm5hbWUiOiLquYDrr7zsiJgiLCJpYXQiOjE3NTI2NzcyOTc5NDksImp0aSI6IjB2bnpqcSIsImV4cCI6MTc1MjY3ODE5Nzk0OX0.xbMFJT8ImTPJPnBUM9WgRWZqUT6xLm4Uk9BbuVA9hjY'; // 임시 토큰

  const getMyAppointment = useCallback(async () => {
    try {
      const response = await fetch(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.APPOINTMENTS}`,
        {
          method: 'GET',
          headers: {
            ...API_CONFIG.HEADERS,
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('예약 정보를 조회하는데 실패했습니다.');
      }

      const data = await response.json();

      setMyAppointments(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getMyAppointment();
  }, [getMyAppointment]);
  return { myAppointments, getMyAppointment };
}
