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
