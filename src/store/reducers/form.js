import ActionTypes from "store/actions";
import { createReducer } from "@reduxjs/toolkit";
import { INPUT_TYPES } from "utils/constants";

const { CHANGE_FORM_FIELD, SET_FORM_FIELDS } = ActionTypes;

const initialState = {
  name: {
    value: "",
    type: INPUT_TYPES.TEXT,
    name: "name",
  },
  birthDate: { value: "", name: "birthDate", type: INPUT_TYPES.TEXT },
  education: { value: "", name: "education", type: INPUT_TYPES.TEXT },
  workPlace: { value: "", name: "workPlace", type: INPUT_TYPES.TEXT },
  experience: { value: "", name: "experience", type: INPUT_TYPES.SELECT },
  email: { value: "", name: "email", type: INPUT_TYPES.TEXT },
  aboutYou: { value: "", name: "aboutYou", type: INPUT_TYPES.TEXTAREA },
};

export const formReducer = createReducer(initialState, {
  [CHANGE_FORM_FIELD]: (state, action) => {
    const { payload } = action;
    state[payload.field].value = payload.value;
  },

  [SET_FORM_FIELDS]: (state, action) => {
    const { payload } = action;
    if (!payload.newState) return;
    state = Object.values(state).map((e) => {
      e.value = payload.newState[e.name];
    });
  },
});
