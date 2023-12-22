export const isEmail = (value: string): boolean => {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const validatePassword = (password: string): string => {
  // Password should contain at least one uppercase letter
  const uppercaseRegex = /[A-Z]/;
  if (!uppercaseRegex.test(password)) {
    return "Password should contain at least one uppercase letter";
  }

  // Password should contain at least one number
  const numberRegex = /[0-9]/;
  if (!numberRegex.test(password)) {
    return "Password should contain at least one number";
  }

  // If all conditions pass, the password is valid
  return "true";
};