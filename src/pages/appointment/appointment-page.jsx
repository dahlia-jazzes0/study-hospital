import { DoctorList } from './appointment-doctor-list';
import { AppointmentCalendar } from './appointment-calendar';
import {
  useGetDoctors,
  useAppointment,
  useGetHoliday,
  useModal,
  useGetAppointment,
  useDeleteAppointment,
} from './use-appointment';
import styles from './appointment-page.module.css';
import { ConfirmModal } from './appointment-confirm-modal';
import { CancleModal } from './appointment-cancle-modal';

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
  const {
    showConfirmModal,
    showCancleModal,
    handleCloseConfirmModal,
    handleCloseCancleModal,
  } = useModal();
  const { myAppointments, getMyAppointment } = useGetAppointment();
  const { deleteAppointment } = useDeleteAppointment();

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
        handleCloseConfirmModal={handleCloseConfirmModal}
        handleCloseCancleModal={handleCloseCancleModal}
        myAppointments={myAppointments}
      />
      {showConfirmModal && (
        <ConfirmModal
          appointmentData={appointmentData}
          getMyAppointment={getMyAppointment}
          resetAppointment={resetAppointment}
          submitAppointment={submitAppointment}
          onClose={handleCloseConfirmModal}
        />
      )}
      {showCancleModal && (
        <CancleModal
          getMyAppointment={getMyAppointment}
          myAppointments={myAppointments}
          deleteAppointment={deleteAppointment}
          onClose={handleCloseCancleModal}
        />
      )}
    </main>
  );
}
