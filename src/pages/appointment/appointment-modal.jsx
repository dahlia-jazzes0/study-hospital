import { createPortal } from 'react-dom';
import styles from './appointment-page.module.css';
import { ConfirmModal } from './appointment-confirm-modal';
import { CancleModal } from './appointment-cancle-modal';

export function Modal({ appointmentData, onClose, onAppointmentSubmit }) {
  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.logoIcon}>
          <img src="./public/images/icon-logo-1.png" alt="모두한의원" />
        </div>
        <ConfirmModal
          onClose={onClose}
          appointmentData={appointmentData}
          onAppointmentSubmit={onAppointmentSubmit}
        />
        <CancleModal onClose={onClose} appointmentData={appointmentData} />
      </div>
    </div>,
    document.body
  );
}
