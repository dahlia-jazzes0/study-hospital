import { useGetDoctors } from './_hooks/use-get-doctors';
import { useAppointment } from './_hooks/use-appointment';
import { useGetHoliday } from './_hooks/use-get-holiday';
import { useGetAppointment } from './_hooks/use-get-appointment';
import { useDeleteAppointment } from './_hooks/use-delete-appointment';
import { ConfirmModal } from './_ui/appointment-confirm-modal';
import { CancleModal } from './_ui/appointment-cancle-modal';
import { DoctorList } from './appointment-doctor-list';
import { AppointmentInformation } from './appointment-information';
import { useModal } from './_hooks/use-modal';
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
    <div className={styles.appointmentWrapper}>
      <div className={styles.appointment}>
        <h1>진료예약</h1>

        <DoctorList
          doctors={doctors}
          isLoading={isLoading}
          selectedDoctorId={appointmentData.doctor.id}
          onDoctorSelect={handleDoctorSelect}
        />

        <AppointmentInformation
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
      </div>
    </div>
  );
}
