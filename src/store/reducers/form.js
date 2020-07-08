import ActionTypes from "store/actions";
import { createReducer } from "@reduxjs/toolkit";
import { INPUT_TYPES, VALIDATION_ERRORS } from "utils/constants";

const { CHANGE_FORM_FIELD, SET_FORM_FIELDS } = ActionTypes;

const initialState = JSON.parse(localStorage.getItem("formFields")) || {
  name: {
    value: "",
    type: INPUT_TYPES.TEXT,
    name: "name",
    errorMessage: VALIDATION_ERRORS.NAME_ERROR,
  },
  birthDate: {
    value: "",
    name: "birthDate",
    type: INPUT_TYPES.TEXT,
    errorMessage: VALIDATION_ERRORS.DATE_ERROR,
  },
  education: {
    value: "",
    name: "education",
    type: INPUT_TYPES.TEXT,
    errorMessage: VALIDATION_ERRORS.EDUCATION_ERROR,
  },
  workPlace: {
    value: "",
    name: "workPlace",
    type: INPUT_TYPES.TEXT,
    errorMessage: VALIDATION_ERRORS.NAME_ERROR,
  },
  experience: {
    value: "",
    name: "experience",
    type: INPUT_TYPES.SELECT,
    errorMessage: VALIDATION_ERRORS.EXPERIENCE_ERROR,
  },
  email: {
    value: "",
    name: "email",
    type: INPUT_TYPES.TEXT,
    errorMessage: VALIDATION_ERRORS.EMAIL_ERROR,
  },
  aboutYou: {
    value: "",
    name: "aboutYou",
    type: INPUT_TYPES.TEXTAREA,
    errorMessage: VALIDATION_ERRORS.ABOUTYOU_ERROR,
  },
};

export const formReducer = createReducer(initialState, {
  [CHANGE_FORM_FIELD]: (state, action) => {
    const { payload } = action;
    state[payload.field].value = payload.value;
  },
});
