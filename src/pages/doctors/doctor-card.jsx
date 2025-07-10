import { useEffect, useState } from 'react';
import styles from '@/pages/doctors/doctor-card.module.css';
import { DoctorDetail } from './doctor-detail';

export function DoctorCard() {
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
          <li key={doctor.id} className={styles.doctorCard}>
            <img
              src={`${import.meta.env.BASE_URL}images/doctor-${doctor.id}.png`}
              alt={`${doctor.name} 이미지`}
              className={styles.doctorImage}
            />

            <section className={styles.doctorInfo}>
              <h3 className={styles.doctorName}>
                {doctor.name} {doctor.chief && '대표'}원장 (
                {getDepartmentName(doctor.departmentId)})
              </h3>

              <dl className={styles.doctorDetails}>
                <div className={styles.detailItem}>
                  <dt className={styles.detailLabel}>학력</dt>
                  <dd className={styles.detailValue}>{doctor.education}</dd>
                </div>

                <div className={styles.detailItem}>
                  <dt className={styles.detailLabel}>경력</dt>
                  {doctor.experience.map((item, i) => (
                    <dd key={i} className={styles.detailValue}>
                      {item}
                    </dd>
                  ))}
                </div>

                <div className={styles.detailItem}>
                  <dt className={styles.detailLabel}>자격 및 인증</dt>
                  {doctor.certifications.map((item, i) => (
                    <dd key={i} className={styles.detailValue}>
                      {item}
                    </dd>
                  ))}
                </div>

                <div className={styles.detailItem}>
                  <dt className={styles.detailLabel}>학회 활동</dt>
                  {doctor.scholarActivities.map((item, i) => (
                    <dd key={i} className={styles.detailValue}>
                      {item}
                    </dd>
                  ))}
                </div>
              </dl>
              <DoctorDetail doctor={doctor} />
            </section>
          </li>
        ))}
      </ul>
    </>
  );
}
