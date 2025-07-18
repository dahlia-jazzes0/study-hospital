import { useState } from 'react';

export function useForm(requiredFields, initialFormData) {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    setFormErrors((prev) => ({ ...prev, [field]: false }));
  };

  const validate = () => {
    const errors = {};
    let hasAnyError = false;

    requiredFields.forEach((field) => {
      const fieldValue = formData[field];
      const isEmpty =
        !fieldValue || (typeof fieldValue === 'string' && fieldValue === '');

      if (isEmpty) {
        errors[field] = true;
        hasAnyError = true;
      } else {
        errors[field] = false;
      }
    });

    const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,20}$/;

    if (formData.userPw && !pwRegex.test(formData.userPw)) {
      errors.userPw =
        '영문, 숫자 포함 6~20자리 구성, 특수기호 제외 입력해주세요.';
      hasAnyError = true;
    }

    if (
      formData.userPw &&
      formData.pwCheck &&
      formData.userPw !== formData.pwCheck
    ) {
      errors.pwCheck = '비밀번호가 일치하지 않습니다.';
      hasAnyError = true;
    }

    if (formData.userNumber) {
      const phoneRegex = /^\d+$/;
      const userNumberStr = formData.userNumber.toString();

      if (!phoneRegex.test(userNumberStr)) {
        errors.userNumber = "'-' 제외 숫자만 입력하세요.";
        hasAnyError = true;
      }
    }

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
