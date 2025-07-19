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
  setIsIdChecked,
}) => {
  const [validationError, setValidationError] = useState('');

  const idDuplicateCheck = async () => {
    const regex = /^[a-zA-Z0-9_]+$/;

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
      // console.log('중복검사 응답:', data);

      if (data.available === false) {
        setValidationError('이미 등록된 아이디입니다.');
        setIsIdChecked(false);
      } else {
        setValidationError('멋진 아이디네요!');
        setIsIdChecked(true);
      }
    } catch (error) {
      console.error(error);
      // setValidationError('중복검사 error');
    }
  };

  return (
    <div className={styles.formField}>
      <label
        htmlFor={id}
        className={`${styles.formLabel} ${required ? styles.requiredLabel : ''} ${hasError ? styles.errorLabel : ''} ${validationError === '멋진 아이디네요!' ? styles.successLabel : ''}`}
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
          onChange={(e) => {
            onChange(e);
            setValidationError('');
            setIsIdChecked(false);
          }}
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
            {validationError ||
              errorMessage ||
              (hasError && '필수 입력값입니다.')}
          </span>
        )}
      </div>
    </div>
  );
};
