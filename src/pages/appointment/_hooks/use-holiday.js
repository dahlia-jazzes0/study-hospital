import { useCallback, useEffect, useState } from 'react';
import { dateToNumber } from '../util';
import { API_CONFIG } from '../config';

// 공휴일 데이터 불러오기
export function useHoliday() {
  const now = new Date();
  const [dateForApi, setDateForApi] = useState({
    year: now.getFullYear(),
    month: now.getMonth() + 1,
  });
  const [holidays, setHolidays] = useState([]);

  const handleNavigationChange = useCallback(
    ({ activeStartDate, view }) => {
      if (view !== 'month') return;

      const year = activeStartDate.getFullYear();
      const month = String(activeStartDate.getMonth() + 1).padStart(2, '0');

      setDateForApi((prev) => ({ ...prev, year, month }));
    },
    [setDateForApi]
  );

  const isHolidayDate = useCallback((date, holidays) => {
    if (!Array.isArray(holidays)) return false;

    const dateNumber = dateToNumber(date);

    return holidays.some((holiday) => holiday.locdate === dateNumber);
  }, []);

  const isWeekend = useCallback((date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0: 일요일, 6: 토요일
  }, []);

  const isDisabledDate = useCallback(
    (date, holidays) => {
      return isWeekend(date) || isHolidayDate(date, holidays);
    },
    [isWeekend, isHolidayDate]
  );

  useEffect(() => {
    const { year, month } = dateForApi;

    const fetchHoliday = async () => {
      try {
        const response = await fetch(
          `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.HOLIDAYS}?year=${year}&month=${month}`,
          {
            method: 'GET',
            headers: API_CONFIG.HEADERS,
          }
        );

        if (!response.ok) {
          throw new Error('holiday-API 정보 조회 실패!');
        }

        const data = await response.json();

        setHolidays(data);
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
