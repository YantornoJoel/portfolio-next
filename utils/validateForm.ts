type ValidationResult = {
  errors: { [key: string]: string };
};

export const validateForm = (formValues: {
  [key: string]: string;
}): ValidationResult => {
  const SPECIAL_CHARACTERS_REGEX = /[!@#$%^&*()"{}|<>]/;
  const errors: { [key: string]: string } = {};

  for (const key in formValues) {
    const value = formValues[key];

    if (value.length < 3 && value !== "") {
      errors[key] = "Debe tener al menos 3 caracteres";
    }
  }

  return { errors };
};
