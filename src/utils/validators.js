import { dateRegex, emailRegex } from "./constants";

export const validateTypedDate = (value) => {
  return !value.length || value.match(dateRegex);
};

export const validateTypedEmail = (value) => {
  return !value.length || value.match(emailRegex);
};
