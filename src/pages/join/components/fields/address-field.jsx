import styles from '../../join-page.module.css';

const loadDaumPostcodeScript = () => {
  return new Promise((resolve, reject) => {
    if (window.daum && window.daum.Postcode) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src =
      'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const findAddress = async (inputId, onChange) => {
  try {
    await loadDaumPostcodeScript();
    new window.daum.Postcode({
      oncomplete: function (data) {
        let addr = '';
        let extraAddr = '';

        if (data.userSelectedType === 'R') {
          addr = data.roadAddress;
        } else {
          addr = data.jibunAddress;
        }

        if (data.userSelectedType === 'R') {
          if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          if (data.buildingName !== '' && data.apartment === 'Y') {
            extraAddr +=
              extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
          }
          if (extraAddr !== '') {
            extraAddr = ' (' + extraAddr + ')';
          }
        }

        const postcodeElement = document.getElementById(inputId);
        const addressElement = document.getElementById(`${inputId}_main`);
        const detailAddressElement = document.getElementById(
          `${inputId}_detail`
        );

        if (postcodeElement) {
          postcodeElement.value = data.zonecode;
        }
        if (addressElement) {
          addressElement.value = addr + extraAddr;
        }
        if (detailAddressElement) {
          detailAddressElement.focus();
        }

        if (onChange) {
          onChange({
            target: {
              value: {
                postcode: data.zonecode,
                address: addr + extraAddr,
                detail: '',
              },
            },
          });
        }
      },
      width: '100%',
      height: '100%',
    }).open();
  } catch (error) {
    console.error(error);
    alert('잠시 후 다시 시도해주세요.');
  }
};

export const AddressField = ({
  label,
  id,
  type,
  placeholder,
  ariaLabel,
  onChange,
  hasError,
  errorMessage,
  required = false,
}) => {
  const handleAddressSearch = () => {
    findAddress(id, onChange);
  };

  const handleDetailAddressChange = (e) => {
    const detailValue = e.target.value;
    const postcodeElement = document.getElementById(id);
    const addressElement = document.getElementById(`${id}_main`);

    if (onChange && postcodeElement && addressElement) {
      onChange({
        target: {
          value: {
            postcode: postcodeElement.value,
            address: addressElement.value,
            detail: detailValue,
          },
        },
      });
    }
  };

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
              onClick={handleAddressSearch}
              onChange={onChange}
              className={`${styles.formInput}`}
              readOnly
            />
            <button
              type="button"
              id="searchAddressBtn"
              className={styles.searchAddressBtn}
              onClick={handleAddressSearch}
            >
              주소찾기
            </button>
            <input
              type={type}
              id={`${id}_main`}
              placeholder="선택된 주소"
              onClick={handleAddressSearch}
              className={styles.formInput}
              readOnly
            />
            <input
              type={type}
              id={`${id}_detail`}
              placeholder="상세주소"
              aria-label={`${ariaLabel} 상세주소 입력`}
              className={styles.formDetailInput}
              onChange={handleDetailAddressChange}
            />
            {hasError && (
              <span className={styles.errorText}>
                {errorMessage || '필수입력란 입니다.'}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
