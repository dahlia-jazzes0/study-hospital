import styles from '../../join-page.module.css';

export const InputField = ({
  label,
  id,
  type,
  placeholder,
  onChange,
  ariaLabel,
  value,
  hasError,
  errorMessage,
}) => {
  return (
    <div className={styles.formField}>
      <label htmlFor={id} className={styles.formLabel}>
        {label}
      </label>
      <div
        className={`${styles.formInputWrapper} ${hasError ? styles.errorMessage : ''}`}
      >
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          aria-label={ariaLabel}
          className={`${styles.formInput} ${hasError ? styles.errorInput : ''}`}
        />
        {hasError && (
          <span className={styles.errorText}>
            {errorMessage || '필수 입력값입니다.'}
          </span>
        )}
      </div>
    </div>
  );
};
