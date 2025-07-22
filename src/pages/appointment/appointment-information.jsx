import { AppointmentCalendar } from './appointment-calendar';
import { TimeTableContainer } from './appointment-timetable-container';
import { AppointmentDescription } from './appointment-description';
import { SelectedInformation } from './_ui/appointment-selected-information';
import { AppointmentButtonWrap } from './_ui/appointment-button-wrap';
import styles from './appointment-information.module.css';

export function AppointmentInformation({
  timeTable,
  appointmentData,
  isTimeTableLoading,
  onDateSelect,
  onTimeSelect,
  isAppointmentComplete,
  handleNavigationChange,
  holidays,
  isHolidayDate,
  isWeekend,
  isDisabledDate,
  handleCloseConfirmModal,
  handleCloseCancleModal,
  myAppointments,
}) {
  return (
    <section className={styles.appointmentInformationWapper}>
      <div className={styles.appointmentInformation1}>
        <AppointmentCalendar
          onDateSelect={onDateSelect}
          handleNavigationChange={handleNavigationChange}
          holidays={holidays}
          isHolidayDate={isHolidayDate}
          isWeekend={isWeekend}
          isDisabledDate={isDisabledDate}
        />

        {appointmentData.doctor && appointmentData.date && (
          <TimeTableContainer
            isTimeTableLoading={isTimeTableLoading}
            timeTable={timeTable}
            appointmentData={appointmentData}
            onTimeSelect={onTimeSelect}
          />
        )}

        <AppointmentDescription
          isAppointmentComplete={isAppointmentComplete}
          appointmentData={appointmentData}
          handleCloseConfirmModal={handleCloseConfirmModal}
          handleCloseCancleModal={handleCloseCancleModal}
          myAppointments={myAppointments}
        />
        {(appointmentData.doctor ||
          appointmentData.date ||
          appointmentData.time) && (
          <SelectedInformation appointmentData={appointmentData} />
        )}
        <AppointmentButtonWrap
          handleCloseConfirmModal={handleCloseConfirmModal}
          isAppointmentComplete={isAppointmentComplete}
          myAppointments={myAppointments}
          handleCloseCancleModal={handleCloseCancleModal}
        />
      </div>
    </section>
  );
}
