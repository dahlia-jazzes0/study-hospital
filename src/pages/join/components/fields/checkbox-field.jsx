import styles from '../../join-page.module.css';

export const CheckBoxField = ({ label, options, ariaLabel, className }) => {
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
              />
              <span className={styles.checkboxText}>{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
