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
  required = false,
}) => {
  return (
    <div className={styles.formField}>
      <label
        htmlFor={id}
        className={`${styles.formLabel} ${required ? styles.requiredLabel : ''} ${hasError ? styles.errorLabel : ''}`}
      >
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
          value={value || ''}
          aria-label={ariaLabel}
          className={`${styles.formInput}`}
        />
        {hasError && (
          <span className={styles.errorText}>
            {errorMessage || '필수입력란 입니다.'}
          </span>
        )}
      </div>
    </div>
  );
};
