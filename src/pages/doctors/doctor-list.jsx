import { useEffect, useState } from 'react';
import styles from '@/pages/doctors/doctor-card.module.css';
import { DoctorCard } from './doctor-card';

export function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctorRes = await fetch(
          'https://hospital-api.dahlia-jazzes0.workers.dev/api/doctors/'
        );
        const departmentRes = await fetch(
          'https://hospital-api.dahlia-jazzes0.workers.dev/api/departments/'
        );

        if (!doctorRes.ok && !departmentRes.ok) {
          throw new Error('네트워크 에러');
        }

        const doctorData = await doctorRes.json();
        const departmentData = await departmentRes.json();

        setDoctors(doctorData);
        setDepartments(departmentData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDoctors();
  }, []);

  const getDepartmentName = (id) => {
    const dept = departments.find((d) => d.id === id);
    return dept ? dept.name : '';
  };

  return (
    <>
      <h2 className={styles.mainTitle}>의료진소개</h2>
      <ul className={styles.doctorList}>
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            departmentName={getDepartmentName(doctor.departmentId)}
          />
        ))}
      </ul>
    </>
  );
}
