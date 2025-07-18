import styles from '../../join-page.module.css';

const idSearch = () => {
  console.log('아이디 찾기');
};

export const IdInputField = ({
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
          value={value}
          aria-label={ariaLabel}
          className={`${styles.formInput}`}
        />
        <button
          type="button"
          id="idsearch"
          className={styles.idsearch}
          onClick={idSearch}
        >
          중복검사
        </button>
        {hasError && (
          <span className={styles.errorText}>
            {errorMessage || '필수 입력값입니다.'}
          </span>
        )}
      </div>
    </div>
  );
};
