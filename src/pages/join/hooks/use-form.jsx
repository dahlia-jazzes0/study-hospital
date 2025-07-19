import { useState } from 'react';

export function useForm(requiredFields, initialFormData) {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  // 🔥 수정: 객체와 문자열 값을 모두 처리할 수 있도록 변경
  const handleChange = (field) => (e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // 에러 상태 업데이트 - 주소 객체의 경우 특별 처리
    let hasValue = false;
    if (field === 'userAddress' && typeof value === 'object' && value) {
      // 주소 객체인 경우: postcode와 address가 모두 있어야 유효
      hasValue = !!(value.postcode && value.address);
    } else {
      // 일반 문자열인 경우
      hasValue = !!(value && value.toString().trim() !== '');
    }

    setFormErrors((prev) => ({
      ...prev,
      [field]: !hasValue,
    }));
  };

  const validate = () => {
    const errors = {};
    let hasAnyError = false;

    requiredFields.forEach((field) => {
      const fieldValue = formData[field];
      let isEmpty = false;

      // 🔥 수정: 주소 필드 특별 처리
      if (field === 'userAddress') {
        isEmpty =
          !fieldValue ||
          typeof fieldValue !== 'object' ||
          !fieldValue.postcode ||
          !fieldValue.address;
      } else {
        isEmpty =
          !fieldValue ||
          (typeof fieldValue === 'string' && fieldValue.trim() === '');
      }

      if (isEmpty) {
        errors[field] = true;
        hasAnyError = true;
      } else {
        errors[field] = false;
      }
    });

    // 비밀번호 검증
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,20}$/;
    if (formData.userPw && !pwRegex.test(formData.userPw)) {
      errors.userPw =
        '영문, 숫자 포함 6~20자리 구성, 특수기호 제외 입력해주세요.';
      hasAnyError = true;
    }

    // 비밀번호 확인 검증
    if (
      formData.userPw &&
      formData.pwCheck &&
      formData.userPw !== formData.pwCheck
    ) {
      errors.pwCheck = '비밀번호가 일치하지 않습니다.';
      hasAnyError = true;
    }

    // 전화번호 검증
    if (formData.userNumber) {
      const phoneRegex = /^\d+$/;
      const userNumberStr = formData.userNumber.toString();
      if (!phoneRegex.test(userNumberStr)) {
        errors.userNumber = "'-' 제외 숫자만 입력하세요.";
        hasAnyError = true;
      }
    }

    // 생년월일 검증
    if (formData.userBirth) {
      const birthDateStr = formData.userBirth.toString();
      const birthDateRegex =
        /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;
      let invalid = false;

      if (!birthDateRegex.test(birthDateStr)) {
        invalid = true;
      } else {
        const year = parseInt(birthDateStr.slice(0, 4), 10);
        const month = parseInt(birthDateStr.slice(4, 6), 10);
        const day = parseInt(birthDateStr.slice(6, 8), 10);
        const date = new Date(year, month - 1, day);

        if (
          date.getFullYear() !== year ||
          date.getMonth() + 1 !== month ||
          date.getDate() !== day
        ) {
          invalid = true;
        }
      }

      if (invalid) {
        errors.userBirth = 'YYYYMMDD';
        hasAnyError = true;
      }
    }

    setFormErrors(errors);
    return !hasAnyError;
  };

  return {
    formData,
    setFormData,
    formErrors,
    setFormErrors,
    handleChange,
    validate,
  };
}
