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

  const idDuplicateCheck = async () => {
    const regex = /^[a-zA-Z0-9]+$/;

    if (!value) {
      setValidationError('필수 입력값입니다.');
      return;
    }

    if (value.length < 4 || !regex.test(value)) {
      setValidationError('영문, 숫자만 입력가능, 최소 4자이상 입력해주세요.');
      return;
    }

    try {
      const res = await fetch(
        `https://hospital-api.dahlia-jazzes0.workers.dev/api/auth/check-username?username=${value}`
      );

      const data = await res.json();

      if (data.exists) {
        setValidationError('이미 등록된 아이디입니다.');
      } else {
        setValidationError('멋진 아이디네요!');
      }
    } catch (error) {
      console.error(error);
      // setValidationError('중복검사 에러');
    }
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
          id="idDuplicateCheck"
          className={styles.idDuplicateCheck}
          onClick={idDuplicateCheck}
        >
          중복검사
        </button>
        {(hasError || validationError) && (
          <span
            className={
              validationError === '멋진 아이디네요!'
                ? styles.successText
                : styles.errorText
            }
          >
            {validationError || errorMessage || '필수 입력값입니다.'}
          </span>
        )}
      </div>
    </div>
  );
};
