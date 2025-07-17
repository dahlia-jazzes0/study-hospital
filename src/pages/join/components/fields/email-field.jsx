import styles from '../../join-page.module.css';

export const EmailField = ({
  label,
  id,
  type,
  placeholder,
  domainOptions,
  ariaLabel,
  emailIdValue,
  emailDomainValue,
  onEmailIdChange,
  onEmailDomainChange,
  hasError,
  emailIdError,
  emailDomainError,
  errorMessage,
}) => {
  return (
    <div className={styles.formField}>
      <label htmlFor={id} className={styles.formLabel}>
        {label}
      </label>
      <div className={styles.formInputWrapper}>
        <div className={styles.emailInputGroup}>
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            aria-label={ariaLabel}
            value={emailIdValue}
            onChange={onEmailIdChange('emailId')}
            className={`${styles.formInput} ${emailIdError ? styles.errorInput : ''}`}
          />
          <select
            id="joinEmailDomain"
            name="emailDomain"
            value={emailDomainValue}
            onChange={onEmailDomainChange('emailDomain')}
            className={`${styles.formSelect} ${styles.joinEmailDomain} ${emailDomainError ? styles.errorInput : ''}`}
          >
            <option value="">이메일 주소를 선택하세요.</option>
            {domainOptions.map((domain) => (
              <option
                key={domain}
                value={domain}
                aria-label={`이메일 도메인 ${domain}`}
              >
                {domain}
              </option>
            ))}
          </select>
        </div>
        {hasError && (
          <span className={styles.errorText}>
            {errorMessage || '필수 입력값입니다.'}
          </span>
        )}
      </div>
    </div>
  );
};
