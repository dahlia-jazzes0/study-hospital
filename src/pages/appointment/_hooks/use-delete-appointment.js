import { useCallback } from 'react';
import { API_CONFIG } from '../api/config';

export function useDeleteAppointment() {
  const deleteAppointment = useCallback(async (id, onClose) => {
    try {
      const accessToken =
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyLTEiLCJ1c2VybmFtZSI6Im1pbnN1X2tpbSIsIm5hbWUiOiLquYDrr7zsiJgiLCJpYXQiOjE3NTI2NzcyOTc5NDksImp0aSI6IjB2bnpqcSIsImV4cCI6MTc1MjY3ODE5Nzk0OX0.xbMFJT8ImTPJPnBUM9WgRWZqUT6xLm4Uk9BbuVA9hjY'; // 임시 토큰

      const response = await fetch(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.APPOINTMENTS}${id}`,
        {
          method: 'DELETE',
          headers: {
            ...API_CONFIG.HEADERS,
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error('예약 삭제 실패!');
      }

      alert('예약이 삭제되었습니다!');

      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, []);

  return {
    deleteAppointment,
  };
}
