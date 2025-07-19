import styles from '../../join-page.module.css';

export const RadioField = ({
  label,
  name,
  options,
  ariaLabel,
  className,
  value,
  onChange,
  hasError,
  errorMessage,
  required = false,
}) => {
  return (
    <div className={`${styles.formField} ${className}`}>
      <label
        className={`${styles.formLabel} ${required ? styles.requiredLabel : ''} ${hasError ? styles.errorLabel : ''}`}
      >
        {label}
      </label>
      <div className={styles.formInputWrapper}>
        <div className={styles.radioGroup}>
          {options.map((option) => (
            <label
              key={option.id}
              htmlFor={`${name}_${option.id}`}
              className={styles.radioLabel}
            >
              <input
                type="radio"
                id={`${name}_${option.id}`}
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                aria-label={ariaLabel}
                className={styles.radioInput}
              />
              <span className={styles.radioText}>{option.label}</span>
            </label>
          ))}
        </div>
        {hasError && (
          <span className={styles.errorText}>
            {errorMessage || '필수 항목입니다.'}
          </span>
        )}
      </div>
    </div>
  );
};
