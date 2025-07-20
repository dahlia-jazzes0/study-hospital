import { useEffect, useState } from 'react';
import { API_CONFIG } from './config';
import { dateToNumber, formattedDate } from './util';

// 의사 목록 조회
export function useGetDoctors() {
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
    };

    fetchDoctors();
  }, []);

  return { doctors, isLoading };
}

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

  // 의사 선택 핸들러
  const handleDoctorSelect = (id, name) => {
    setAppointmentData((prev) => ({
      ...prev,
      doctor: {
        id,
        name,
      },
      time: null,
    }));
  };

  // 날짜 선택 핸들러
  const handleDateSelect = (selectedDate) => {
    const date = formattedDate(selectedDate);
    setAppointmentData((prev) => ({
      ...prev,
      date,
      time: null,
    }));
  };

  // 시간 선택 핸들러
  const handleTimeSelect = (time) => {
    setAppointmentData((prev) => ({
      ...prev,
      time,
    }));
  };

  // 예약 데이터 초기화
  const resetAppointment = () => {
    setAppointmentData({
      doctor: {
        id: null,
        name: null,
      },
      date: null,
      time: null,
    });
    setTimeTable([]);
  };

  // 시간표 조회
  useEffect(() => {
    const fetchTimeTable = async () => {
      const { doctor, date } = appointmentData;
      if (!doctor || !date) {
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

  // 예약 제출
  const submitAppointment = async () => {
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
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            doctorId: doctor.id,
            date,
            time,
          }),
        }
      );
      console.log('submit res : ', response);

      if (!response.ok) {
        throw new Error('예약 실패!');
      }

      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

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

export function useGetHoliday() {
  const now = new Date();
  const [dateForApi, setDateForApi] = useState({
    year: now.getFullYear(),
    month: now.getMonth() + 1,
  });
  const [holidays, setHolidays] = useState([]);

  const handleNavigationChange = ({ activeStartDate, view }) => {
    if (view !== 'month') return;

    const year = activeStartDate.getFullYear();
    const month = String(activeStartDate.getMonth() + 1).padStart(2, '0');

    setDateForApi((prev) => ({ ...prev, year, month }));
  };

  const isHolidayDate = (date, holidays) => {
    if (!Array.isArray(holidays)) return false;

    const dateNumber = dateToNumber(date);

    return holidays.some((holiday) => holiday.locdate === dateNumber);
  };

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0: 일요일, 6: 토요일
  };

  const isDisabledDate = (date, holidays) => {
    return isWeekend(date) || isHolidayDate(date, holidays);
  };

  const processHolidayData = (apiResponse) => {
    const items = apiResponse?.response?.body?.items?.item;

    if (!items) return [];

    return Array.isArray(items) ? items : [items];
  };

  useEffect(() => {
    const { year, month } = dateForApi;

    const fetchHoliday = async () => {
      const API_KEY = import.meta.env.VITE_HOLIDAY_API_KEY;
      const BASE_URL =
        'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService';

      try {
        const response = await fetch(
          `${BASE_URL}/getRestDeInfo?solYear=${year}&solMonth=${month}&ServiceKey=${API_KEY}&_type=json`
        );

        if (!response.ok) {
          throw new Error('holiday-API 정보 조회 실패!');
        }

        const data = await response.json();
        const result = processHolidayData(data);

        setHolidays(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHoliday();
  }, [dateForApi]);

  return {
    holidays,
    handleNavigationChange,
    isHolidayDate,
    isWeekend,
    isDisabledDate,
  };
}

export function useModal() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  return {
    showModal,
    handleCloseModal,
  };
}
