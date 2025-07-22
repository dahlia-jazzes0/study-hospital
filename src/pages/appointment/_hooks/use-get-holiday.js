import { useEffect, useState } from 'react';
import { dateToNumber } from '../util';

// 공휴일 데이터 불러오기
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
