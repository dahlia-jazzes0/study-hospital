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
  openConfirmModal,
  openCancelModal,
  myAppointments,
  isLogin,
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
          isLogin={isLogin}
        />

        {appointmentData.doctor && appointmentData.date && (
          <TimeTableContainer
            isTimeTableLoading={isTimeTableLoading}
            timeTable={timeTable}
            appointmentData={appointmentData}
            onTimeSelect={onTimeSelect}
          />
        )}

        <AppointmentDescription />
        {(appointmentData.doctor ||
          appointmentData.date ||
          appointmentData.time) && (
          <SelectedInformation appointmentData={appointmentData} />
        )}
        {isLogin && (
          <AppointmentButtonWrap
            openConfirmModal={openConfirmModal}
            isAppointmentComplete={isAppointmentComplete}
            myAppointments={myAppointments}
            openCancelModal={openCancelModal}
          />
        )}
      </div>
    </section>
  );
}
