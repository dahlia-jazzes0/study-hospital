import { useCallback, useEffect, useState } from 'react';
import { formattedDate } from '../util';
import { API_CONFIG } from '../api/config';

// 예약 전체 상태 관리
export function useAppointment() {
  const [timeTable, setTimeTable] = useState([]);
  const [appointmentData, setAppointmentData] = useState({
    doctor: {
      id: null,
      name: null,
    },
    date: null,
    time: null,
  });
  const [isTimeTableLoading, setIsTimeTableLoading] = useState(false);

  // 의사 선택
  const handleDoctorSelect = useCallback((id, name) => {
    setAppointmentData((prev) => ({
      ...prev,
      doctor: { id, name },
      time: null,
    }));
  }, []);

  // 날짜 선택
  const handleDateSelect = useCallback((selectedDate) => {
    const date = formattedDate(selectedDate);
    setAppointmentData((prev) => ({
      ...prev,
      date,
      time: null,
    }));
  }, []);

  // 시간 선택
  const handleTimeSelect = useCallback((time) => {
    setAppointmentData((prev) => ({
      ...prev,
      time,
    }));
  }, []);

  // 예약 데이터 초기화
  const resetAppointment = useCallback(() => {
    setAppointmentData({
      doctor: { id: null, name: null },
      date: null,
      time: null,
    });
    setTimeTable([]);
  }, []);

  // 예약 제출
  const submitAppointment = useCallback(async () => {
    const { doctor, date, time } = appointmentData;

    if (!doctor || !date || !time) {
      throw new Error('모든 정보를 선택해주세요.');
    }

    try {
      const accessToken =
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyLTEiLCJ1c2VybmFtZSI6Im1pbnN1X2tpbSIsIm5hbWUiOiLquYDrr7zsiJgiLCJpYXQiOjE3NTI2NzcyOTc5NDksImp0aSI6IjB2bnpqcSIsImV4cCI6MTc1MjY3ODE5Nzk0OX0.xbMFJT8ImTPJPnBUM9WgRWZqUT6xLm4Uk9BbuVA9hjY'; // 임시 토큰

      const response = await fetch(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.APPOINTMENTS}`,
        {
          method: 'POST',
          headers: {
            ...API_CONFIG.HEADERS,
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            doctorId: doctor.id,
            date,
            time,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('예약 실패!');
      }

      const result = await response.json();

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, [appointmentData]);

  // 시간표 조회
  useEffect(() => {
    const fetchTimeTable = async () => {
      const { doctor, date } = appointmentData;
      if (!doctor?.id || !date) {
        setTimeTable([]);
        return;
      }

      setIsTimeTableLoading(true);

      try {
        const response = await fetch(
          `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.AVAILABILITY}?doctorId=${doctor.id}&date=${date}`,
          {
            method: 'GET',
            headers: API_CONFIG.HEADERS,
          }
        );

        if (!response.ok) {
          throw new Error('timeTable 정보 조회 실패!');
        }

        const result = await response.json();

        setTimeTable(result);
      } catch (error) {
        console.error(error);
        setTimeTable([]);
      } finally {
        setIsTimeTableLoading(false);
      }
    };

    fetchTimeTable();
  }, [appointmentData]);

  return {
    timeTable,
    appointmentData,
    isTimeTableLoading,
    handleDoctorSelect,
    handleDateSelect,
    handleTimeSelect,
    resetAppointment,
    submitAppointment,
    // 예약 완료 여부 체크
    isAppointmentComplete: Boolean(
      appointmentData.doctor && appointmentData.date && appointmentData.time
    ),
  };
}
