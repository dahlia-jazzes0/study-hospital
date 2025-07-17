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
  onChange,
  emailIdFieldName = 'emailId',
  emailDomainFieldName = 'emailDomain',
  hasError,
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
      <div className={styles.formInputWrapper}>
        <div className={styles.emailInputGroup}>
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            aria-label={ariaLabel}
            value={emailIdValue}
            onChange={onChange(emailIdFieldName)}
            className={`${styles.formInput}`}
          />
          <select
            id="joinEmailDomain"
            name="emailDomain"
            value={emailDomainValue}
            onChange={onChange(emailDomainFieldName)}
            className={`${styles.formSelect} ${styles.joinEmailDomain} ${
              emailDomainValue && emailDomainValue !== '' ? styles.hasValue : ''
            }`}
          >
            <option value="" disabled>
              이메일 주소를 선택하세요.
            </option>
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
          <span className={styles.errorText}>필수 입력값입니다.</span>
        )}
      </div>
    </div>
  );
};
