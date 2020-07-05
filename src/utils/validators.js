import { dateRegex, emailRegex, VALIDATION_ERRORS } from "./constants";

export const validators = {
  email: {
    validate: (value) => {
      return !value.length || emailRegex.test(value);
    },
    getError: () => {
      return VALIDATION_ERRORS.EMAIL_ERROR;
    },
  },
  birthDate: {
    validate: (value) => {
      return !value.length || dateRegex.test(value);
    },
    getError: () => {
      return VALIDATION_ERRORS.DATE_ERROR;
    },
  },
  aboutYou: {
    validate: (value) => {
      return !value.length || (value.length > 0 && value.length < 500);
    },
    getError: () => {
      return VALIDATION_ERRORS.ABOUTYOU_ERROR;
    },
  },
  workPlace: {
    validate: (value) => {
      return !value.length || value.length < 50;
    },
    getError: () => {
      return VALIDATION_ERRORS.WORKPLACE_ERROR;
    },
  },
  experience: {
    validate: (value) => {
      return !value.length || value.length < 70;
    },
    getError: () => {
      return VALIDATION_ERRORS.EXPERIENCE_ERROR;
    },
  },
  name: {
    validate: (value) => {
      return !value.length || value.length < 40;
    },
    getError: () => {
      return VALIDATION_ERRORS.NAME_ERROR;
    },
  },
  education: {
    validate: (value) => {
      return !value.length || value.length < 50;
    },
    getError: () => {
      return VALIDATION_ERRORS.EDUCATION_ERROR;
    },
  },
};
