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
  email: "",
  contacts: "",
};

const { CHANGE_FORM_FIELD, SET_FORM_FIELDS } = ActionTypes;

export const formReducer = createReducer(initialState, {
  [CHANGE_FORM_FIELD]: (state, action) => {
    const { payload } = action;
    state[payload.field] = payload.value;
  },

  [SET_FORM_FIELDS]: (state, action) => {
    const { payload } = action;
    payload.newState.forEach((e) => {
      state[e.name] = e.value;
    });
  },
});
