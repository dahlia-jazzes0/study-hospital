import React from 'react';
import { DoctorCard } from './_ui/appointment-doctor-card';
import { SkeletonCard } from './_ui/appointment-skeleton-card';
import styles from './appointment-doctor-list.module.css';

export const DoctorList = React.memo(function DoctorList({
  doctors,
  isLoading,
  selectedDoctorId,
  isLogin,
  onDoctorSelect,
}) {
  const skeletonCards = React.useMemo(
    () => Array.from({ length: 7 }, (_, index) => <SkeletonCard key={index} />),
    []
  );

  const createDoctorSelectHandler = React.useCallback(
    (doctorId, doctorName, departmentName, isLogin) => () => {
      if (!isLogin) {
        alert('로그인이 필요한 서비스입니다.');
        return;
      }
      onDoctorSelect(doctorId, doctorName, departmentName);
    },
    [onDoctorSelect]
  );

  return (
    <section className={styles.doctorList}>
      <h2 className="sr-only">의료진 목록</h2>
      <ul className={styles.cardList}>
        {!isLoading
          ? doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                isSelected={isLogin && selectedDoctorId === doctor.id}
                onSelect={createDoctorSelectHandler(
                  doctor.id,
                  doctor.name,
                  doctor.departmentName,
                  isLogin
                )}
              />
            ))
          : skeletonCards}
      </ul>
    </section>
  );
});
