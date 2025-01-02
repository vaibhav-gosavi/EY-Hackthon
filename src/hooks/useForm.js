import { useState } from 'react';
import { z } from 'zod';

export function useForm(schema) {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});

  const register = (name) => ({
    name,
    value: formData[name] || '',
    onChange: (e) => {
      setFormData((prev) => ({ ...prev, [name]: e.target.value }));
    },
  });

  const handleSubmit = (onSubmit) => async (e) => {
    e.preventDefault();
    try {
      const validData = schema.parse(formData);
      setErrors({});
      await onSubmit(validData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return { register, handleSubmit, errors };
}
