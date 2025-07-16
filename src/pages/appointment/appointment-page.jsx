import { DoctorList } from './appointment-doctor-list';
import { AppointmentCalendar } from './appointment-calendar';
import { useGetDoctors, useAppointment } from './use-appointment';
import styles from './appointment-page.module.css';

export function AppointmentPage() {
  const { doctors, isLoading } = useGetDoctors();
  const {
    timeTable,
    appointmentData,
    isTimeTableLoading,
    handleDoctorSelect,
    handleDateSelect,
    handleTimeSelect,
    resetAppointment,
    submitAppointment,
    isAppointmentComplete,
  } = useAppointment();

  const handleAppointmentSubmit = async () => {
    try {
      await submitAppointment();
      alert('예약이 완료되었습니다!');
      resetAppointment();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className={styles.appointment}>
      <h1>진료예약</h1>

      <DoctorList
        doctors={doctors}
        isLoading={isLoading}
        selectedDoctorId={appointmentData.doctorId}
        onDoctorSelect={handleDoctorSelect}
      />

      <AppointmentCalendar
        timeTable={timeTable}
        appointmentData={appointmentData}
        isTimeTableLoading={isTimeTableLoading}
        onDateSelect={handleDateSelect}
        onTimeSelect={handleTimeSelect}
        onAppointmentSubmit={handleAppointmentSubmit}
        isAppointmentComplete={isAppointmentComplete}
      />
    </main>
  );
}
