import { useState } from 'react';
import styles from '../../join-page.module.css';

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
  const [validationError, setValidationError] = useState('');

  const idSearch = () => {
    const regex = /^[a-zA-Z0-9]+$/;

    if (!value || value.length < 4 || !regex.test(value)) {
      setValidationError('영문, 숫자만 입력가능, 최소 4자이상 입력해주세요');
      return;
    }

    console.log('아이디 찾기');
    setValidationError('');
  };
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
        {(hasError || validationError) && (
          <span className={styles.errorText}>
            {validationError || errorMessage || '필수 입력값입니다.'}
          </span>
        )}
      </div>
    </div>
  );
};
