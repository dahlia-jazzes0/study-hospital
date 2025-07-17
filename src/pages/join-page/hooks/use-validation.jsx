import { useState } from 'react';

export function useValidation(requiredFields, initialFormData) {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    setFormErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleEmailIdChange = (e) => {
    setFormData((prev) => ({ ...prev, emailId: e.target.value }));
    setFormErrors((prev) => ({ ...prev, emailId: false }));
  };

  const handleEmailDomainChange = (e) => {
    setFormData((prev) => ({ ...prev, emailDomain: e.target.value }));
    setFormErrors((prev) => ({ ...prev, emailDomain: false }));
  };

  const validate = () => {
    const errors = {};
    let hasAnyError = false;

    requiredFields.forEach((field) => {
      if (field === 'emailId') {
        if (!formData.emailId || formData.emailId === '') {
          errors.emailId = true;
          hasAnyError = true;
        } else {
          errors.emailId = false;
        }
      } else if (field === 'emailDomain') {
        if (!formData.emailDomain || formData.emailDomain === '') {
          errors.emailDomain = true;
          hasAnyError = true;
        } else {
          errors.emailDomain = false;
        }
      } else {
        if (!formData[field] || formData[field] === '') {
          errors[field] = true;
          hasAnyError = true;
        } else {
          errors[field] = false;
        }
      }
    });

    setFormErrors(errors);
    return !hasAnyError;
  };

  return {
    formData,
    setFormData,
    formErrors,
    setFormErrors,
    handleChange,
    handleEmailIdChange,
    handleEmailDomainChange,
    validate,
  };
}
