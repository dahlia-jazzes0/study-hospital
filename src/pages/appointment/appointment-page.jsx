import { DoctorList } from './appointment-doctor-list';
import { AppointmentCalendar } from './appointment-calendar';
import {
  useGetDoctors,
  useAppointment,
  useGetHoliday,
  useModal,
} from './use-appointment';
import styles from './appointment-page.module.css';
import { Modal } from './appointment-modal';

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
  const {
    holidays,
    handleNavigationChange,
    isHolidayDate,
    isWeekend,
    isDisabledDate,
  } = useGetHoliday();

  const { showModal, handleCloseModal } = useModal();

  const handleAppointmentSubmit = async () => {
    try {
      await submitAppointment();
      alert('예약이 완료되었습니다!');
      resetAppointment();
      handleCloseModal();
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
        selectedDoctorId={appointmentData.doctor.id}
        onDoctorSelect={handleDoctorSelect}
      />

      <AppointmentCalendar
        timeTable={timeTable}
        appointmentData={appointmentData}
        isTimeTableLoading={isTimeTableLoading}
        onDateSelect={handleDateSelect}
        onTimeSelect={handleTimeSelect}
        isAppointmentComplete={isAppointmentComplete}
        handleNavigationChange={handleNavigationChange}
        holidays={holidays}
        isHolidayDate={isHolidayDate}
        isWeekend={isWeekend}
        isDisabledDate={isDisabledDate}
        handleCloseModal={handleCloseModal}
      />
      {showModal && (
        <Modal
          appointmentData={appointmentData}
          onClose={handleCloseModal}
          onAppointmentSubmit={handleAppointmentSubmit}
        />
      )}
    </main>
  );
}
