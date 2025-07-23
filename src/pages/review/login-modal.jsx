import styles from '@/pages/review/review-page.module.css';

export function LoginModal({ onClose }) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <p className={styles.message}>로그인이 필요한 서비스입니다.</p>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              onClose();
              window.location.href = '/login';
            }}
          >
            로그인 하러가기
          </button>
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
}
