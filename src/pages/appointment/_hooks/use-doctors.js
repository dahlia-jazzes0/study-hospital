import { useEffect, useState } from 'react';
import { API_CONFIG } from '../config';

// 의사 목록 조회
export function useDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      setIsLoading(true);

      try {
        const doctorsResponse = await fetch(
          `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.DOCTORS}`,
          {
            method: 'GET',
            headers: API_CONFIG.HEADERS,
          }
        );

        const departmentsResponse = await fetch(
          `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.DEPARTMENTS}`,
          {
            method: 'GET',
            headers: API_CONFIG.HEADERS,
          }
        );

        if (!doctorsResponse.ok) {
          throw new Error('Doctors 정보 조회 실패!');
        }

        if (!departmentsResponse.ok) {
          throw new Error('Departments 정보 조회 실패!');
        }

        const doctorsResult = await doctorsResponse.json();
        const departmentsResult = await departmentsResponse.json();

        const doctorsWithDepts = doctorsResult.map((doctor) => ({
          ...doctor,
          departmentName: departmentsResult.find(
            (dept) => dept.id === doctor.departmentId
          )?.name,
        }));

        setDoctors(doctorsWithDepts);
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
