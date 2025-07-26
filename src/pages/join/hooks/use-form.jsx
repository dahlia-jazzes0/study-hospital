import { useState } from 'react';

export function useForm(initialFormData) {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isIdChecked, setIsIdChecked] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    setFormErrors((prev) => ({ ...prev, [field]: false }));

    if (field === 'userId') {
      setIsIdChecked(false);
    }
  };

  const formatPhoneNumber = (number) => {
    const digits = number.replace(/\D/g, '');
    if (digits.length === 11) {
      return digits.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }
    return number;
  };

  const transformDataForAPI = () => {
    const apiData = {
      name: formData.userName || '',
      username: formData.userId || '',
      password: formData.userPw || '',
      phoneNumber: formData.userNumber
        ? formatPhoneNumber(formData.userNumber)
        : '',
      email:
        formData.emailId && formData.emailDomain
          ? `${formData.emailId}@${formData.emailDomain}`
          : '',
      address:
        typeof formData.userAddress === 'string'
          ? formData.userAddress
          : formData.userAddress
            ? Object.values(formData.userAddress).join(' ')
            : '',
      dateOfBirth: formData.userBirth
        ? formData.userBirth.replace(/^(\d{4})(\d{2})(\d{2})$/, '$1-$2-$3')
        : '',
      signupSource: formData.joinRoute || 'unknown',
      interestedConditions:
        Array.isArray(formData.interestDisease) &&
        formData.interestDisease.length > 0
          ? formData.interestDisease
          : [],
    };

    if (formData.receiveEmail === 'Y' || formData.receiveEmail === 'N') {
      apiData.emailConsent = formData.receiveEmail === 'Y';
    }

    if (formData.receiveSMS === 'Y' || formData.receiveSMS === 'N') {
      apiData.smsConsent = formData.receiveSMS === 'Y';
    }

    return apiData;
  };

  const validate = () => {
    const errors = {};
    let hasAnyError = false;

    if (formData.userId && !isIdChecked) {
      errors.userId = '필수입력란 입니다.';
      hasAnyError = true;
    }

    const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
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

    if (formData.userName) {
      const name = formData.userName;
      const nameRegex = /^[가-힣a-zA-Z]{1,6}$/;

      const hasOnlyHangulJamo = /^[ㄱ-ㅎㅏ-ㅣ]+$/.test(name);
      const hasIncompleteHangul = [...name].some(
        (char) =>
          (char >= 'ㄱ' && char <= 'ㅎ') || (char >= 'ㅏ' && char <= 'ㅣ')
      );

      if (!nameRegex.test(name) || hasOnlyHangulJamo || hasIncompleteHangul) {
        errors.userName = '필수입력란 입니다.';
        hasAnyError = true;
      }
    }

    if (formData.userNumber) {
      const phoneRegex = /^\d+$/;
      const userNumberStr = formData.userNumber.toString();
      if (!phoneRegex.test(userNumberStr)) {
        errors.userNumber = "'-' 제외 숫자만 입력하세요.";
        hasAnyError = true;
      }
    }

    if (formData.userAddress) {
      const allowedPattern = /^[a-zA-Z0-9가-힣\s\-#./()~`]*$/;
      const onlyConsonantVowelPattern = /^[ㄱ-ㅎㅏ-ㅣ]+$/;

      if (formData.userAddress.detail) {
        if (onlyConsonantVowelPattern.test(formData.userAddress.detail)) {
          errors.userAddress = '상세주소를 확인해주세요.';
          hasAnyError = true;
        } else if (!allowedPattern.test(formData.userAddress.detail)) {
          errors.userAddress = '특수문자는 -, #, ., /, ( ), ~, `만 가능합니다.';
          hasAnyError = true;
        }
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

  const submitRegistration = async () => {
    setIsLoading(true);

    try {
      const apiData = transformDataForAPI();

      const response = await fetch(
        'https://hospital-api.dahlia-jazzes0.workers.dev/api/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(apiData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();

        const fieldMap = {
          '/name': 'userName',
          '/username': 'userId',
          '/password': 'userPw',
          '/phoneNumber': 'userNumber',
          '/email': 'emailId',
          '/address': 'userAddress',
          '/dateOfBirth': 'userBirth',
          '/emailConsent': 'receiveEmail',
          '/smsConsent': 'receiveSMS',
        };

        const newErrors = {};

        if (Array.isArray(errorData.errors)) {
          errorData.errors.forEach((err) => {
            const fieldName = fieldMap[err.path];
            if (fieldName) {
              newErrors[fieldName] = '필수입력란 입니다.';
            }
          });
        } else {
          const fieldName = fieldMap[errorData.property];
          if (fieldName) {
            newErrors[fieldName] = '필수입력란 입니다.';
          }
        }

        setFormErrors((prev) => ({
          ...prev,
          ...newErrors,
        }));

        return { success: false };
      }

      const result = await response.json();

      return {
        success: true,
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    formErrors,
    setFormErrors,
    handleChange,
    validate,
    submitRegistration,
    isLoading,
    isIdChecked,
    setIsIdChecked,
  };
}
