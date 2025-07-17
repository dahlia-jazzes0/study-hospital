import styles from '../../join-page.module.css';

const findAddress = () => {
  console.log('주소 검색');
};

export const AddressField = ({
  label,
  id,
  type,
  placeholder,
  ariaLabel,
  value,
  onChange,
  hasError,
  errorMessage,
  required = false,
}) => {
  return (
    <>
      <div className={styles.formField}>
        <label
          htmlFor={id}
          className={`${styles.formLabel} ${required ? styles.requiredLabel : ''} ${hasError ? styles.errorLabel : ''}`}
        >
          {label}
        </label>
        <div className={styles.formInputWrapper}>
          <div className={styles.grid}>
            <input
              type={type}
              id={id}
              placeholder={placeholder}
              aria-label={`${ariaLabel} 필수입력란`}
              onClick={findAddress}
              value={value}
              onChange={onChange}
              className={`${styles.formInput}`}
            />
            <button
              type="button"
              id="searchAddressBtn"
              className={styles.searchAddressBtn}
              onClick={findAddress}
            >
              주소검색
            </button>
            <input
              type={type}
              id={`${id}_main`}
              placeholder={label}
              onClick={findAddress}
              readOnly
              className={styles.formInput}
            />
            <input
              type={type}
              id={`${id}_detail`}
              placeholder="상세주소"
              aria-label={`${ariaLabel} 상세주소 입력`}
              className={styles.formDetailInput}
            />
            {hasError && (
              <span className={styles.errorText}>
                {errorMessage || '필수 입력값입니다.'}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
