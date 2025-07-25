import { getAccessToken } from '@/shared/auth/auth';
import { useCallback, useEffect, useState } from 'react';
import { API_CONFIG } from '../config';
import { formattedDate } from '../util';

// 예약 전체 상태 관리
export function useAppointment() {
  const [timeTable, setTimeTable] = useState([]);
  const [appointmentData, setAppointmentData] = useState({
    doctor: {
      id: null,
      name: null,
      departmentName: null,
    },
    date: null,
    time: null,
  });
  const [isTimeTableLoading, setIsTimeTableLoading] = useState(false);

  // 의사 선택
  const selectDoctor = useCallback((id, name, departmentName) => {
    setAppointmentData((prev) => ({
      ...prev,
      doctor: { id, name, departmentName },
      time: null,
    }));
  }, []);

  // 날짜 선택
  const selectDate = useCallback((selectedDate) => {
    const date = formattedDate(selectedDate);
    setAppointmentData((prev) => ({
      ...prev,
      date,
      time: null,
    }));
  }, []);

  // 시간 선택
  const selectTime = useCallback((time) => {
    setAppointmentData((prev) => ({
      ...prev,
      time,
    }));
  }, []);

  // 예약 데이터 초기화
  const resetAppointment = useCallback(() => {
    setAppointmentData({
      doctor: { id: null, name: null, departmentName: null },
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
      const accessToken = await getAccessToken();

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

  const appointmentDeletion = useCallback(async (id, onClose) => {
    try {
      const accessToken = await getAccessToken();

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

  // 시간표 조회
  const { doctor, date } = appointmentData;

  useEffect(() => {
    const fetchTimeTable = async () => {
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
  }, [doctor?.id, date]);

  return {
    timeTable,
    appointmentData,
    isTimeTableLoading,
    selectDoctor,
    selectDate,
    selectTime,
    resetAppointment,
    submitAppointment,
    appointmentDeletion,
    // 예약 완료 여부 체크
    isAppointmentComplete: Boolean(
      appointmentData.doctor && appointmentData.date && appointmentData.time
    ),
  };
}
