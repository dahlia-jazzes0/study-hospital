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
      const isEmpty = !fieldValue || fieldValue.trim() === '';

      if (isEmpty) {
        errors[field] = true;
        hasAnyError = true;
      } else {
        errors[field] = false;
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
    validate,
  };
}
