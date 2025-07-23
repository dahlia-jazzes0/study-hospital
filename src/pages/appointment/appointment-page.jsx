import { useDoctors } from './_hooks/use-doctors';
import { useAppointment } from './_hooks/use-appointment';
import { useHoliday } from './_hooks/use-holiday';
import { useMyAppointment } from './_hooks/use-my-appointment';
import { ConfirmModal } from './_ui/appointment-confirm-modal';
import { CancelModal } from './_ui/appointment-cancel-modal';
import { DoctorList } from './appointment-doctor-list';
import { AppointmentInformation } from './appointment-information';
import { useModal } from './_hooks/use-modal';
import styles from './appointment-page.module.css';
import { useLoginCheck } from './_hooks/use-login-check';

export function AppointmentPage() {
  const { doctors, isLoading } = useDoctors();
  const {
    timeTable,
    appointmentData,
    isTimeTableLoading,
    selectDoctor,
    selectDate,
    selectTime,
    resetAppointment,
    submitAppointment,
    appointmentDeletion,
    isAppointmentComplete,
  } = useAppointment();
  const {
    holidays,
    handleNavigationChange,
    isHolidayDate,
    isWeekend,
    isDisabledDate,
  } = useHoliday();
  const {
    isConfirmModalOpen,
    isCancelModalOpen,
    openConfirmModal,
    closeConfirmModal,
    openCancelModal,
    closeCancelModal,
  } = useModal();
  const { myAppointments, getMyAppointment } = useMyAppointment();
  const { isLogin } = useLoginCheck();

  return (
    <div className={styles.appointmentWrapper}>
      <div className={styles.appointment}>
        <h1>진료예약</h1>

        <DoctorList
          doctors={doctors}
          isLoading={isLoading}
          selectedDoctorId={appointmentData.doctor.id}
          isLogin={isLogin}
          onDoctorSelect={selectDoctor}
        />

        <AppointmentInformation
          timeTable={timeTable}
          appointmentData={appointmentData}
          isTimeTableLoading={isTimeTableLoading}
          onDateSelect={selectDate}
          onTimeSelect={selectTime}
          isAppointmentComplete={isAppointmentComplete}
          handleNavigationChange={handleNavigationChange}
          holidays={holidays}
          isHolidayDate={isHolidayDate}
          isWeekend={isWeekend}
          isDisabledDate={isDisabledDate}
          openConfirmModal={openConfirmModal}
          openCancelModal={openCancelModal}
          myAppointments={myAppointments}
          isLogin={isLogin}
        />
        {isConfirmModalOpen && (
          <ConfirmModal
            appointmentData={appointmentData}
            getMyAppointment={getMyAppointment}
            resetAppointment={resetAppointment}
            submitAppointment={submitAppointment}
            onClose={closeConfirmModal}
          />
        )}

        {isCancelModalOpen && (
          <CancelModal
            getMyAppointment={getMyAppointment}
            myAppointments={myAppointments}
            deleteAppointment={appointmentDeletion}
            onClose={closeCancelModal}
          />
        )}
      </div>
    </div>
  );
}
