import ActionTypes from "store/actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  birthDate: "",
  education: "",
  workPlace: "",
  experience: "",
  skills: "",
  aboutYou: "",
  englishLevel: "",
  wantToLearn: "",
  contacts: "",
};

const { CHANGE_FORM_FIELD } = ActionTypes;

export const formReducer = createReducer(initialState, {
  [CHANGE_FORM_FIELD]: (state, action) => {
    const { payload } = action;
    state[payload.field] = payload.value;
  },
});
