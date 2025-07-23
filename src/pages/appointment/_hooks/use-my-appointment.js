import { useCallback, useEffect, useState } from 'react';
import { API_CONFIG } from '../config';
import { getAccessToken } from '../util';

// 예약 정보 불러오기
export function useMyAppointment() {
  const [myAppointments, setMyAppointments] = useState([]);

  const accessToken = getAccessToken();

  const getMyAppointment = useCallback(async () => {
    try {
      const myAppointmentResponse = await fetch(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.APPOINTMENTS}`,
        {
          method: 'GET',
          headers: {
            ...API_CONFIG.HEADERS,
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const doctorsResponse = await fetch(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.DOCTORS}`,
        {
          method: 'GET',
          headers: API_CONFIG.HEADERS,
        }
      );

      if (!myAppointmentResponse.ok) {
        throw new Error('예약 정보를 조회하는데 실패했습니다.');
      }

      if (!doctorsResponse.ok) {
        throw new Error('Doctors 정보 조회 실패!');
      }

      const myAppointmentResult = await myAppointmentResponse.json();
      const doctorsResult = await doctorsResponse.json();

      const MyAppointmentWithDoctors = myAppointmentResult.map(
        (appointment) => ({
          ...appointment,
          doctorName: doctorsResult.find(
            (doctor) => doctor.id === appointment.doctorId
          )?.name,
        })
      );

      setMyAppointments(MyAppointmentWithDoctors);
    } catch (error) {
      console.error(error);
    }
  }, [accessToken]);

  useEffect(() => {
    getMyAppointment();
  }, [getMyAppointment]);

  return { myAppointments, getMyAppointment };
}
