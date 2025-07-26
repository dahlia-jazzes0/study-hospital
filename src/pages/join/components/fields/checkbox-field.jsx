import styles from '../../join-page.module.css';

export const CheckBoxField = ({
  label,
  options,
  ariaLabel,
  className,
  value = [],
  onChange,
}) => {
  const handleCheckboxChange = (optionValue) => {
    const currentValues = Array.isArray(value) ? value : [];

    if (currentValues.includes(optionValue)) {
      const newValues = currentValues.filter((v) => v !== optionValue);
      onChange({ target: { value: newValues } });
    } else {
      const newValues = [...currentValues, optionValue];
      onChange({ target: { value: newValues } });
    }
  };

  return (
    <div className={`${styles.formField} ${className}`}>
      <label className={styles.formLabel}>{label}</label>
      <div className={styles.formInputWrapper}>
        <div className={styles.checkboxGroup}>
          {options.map((option) => (
            <label
              key={option.id}
              htmlFor={option.id}
              className={styles.checkboxLabel}
            >
              <input
                type="checkbox"
                id={option.id}
                name={option.name}
                aria-label={ariaLabel}
                className={styles.checkboxInput}
                checked={Array.isArray(value) && value.includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
              />
              <span className={styles.checkboxText}>{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
