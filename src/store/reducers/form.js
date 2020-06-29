import ActionTypes from "store/actions";
import { createReducer } from "@reduxjs/toolkit";
import { INPUT_TYPES } from "utils/constants";

const { CHANGE_FORM_FIELD, SET_FORM_FIELDS } = ActionTypes;

const initialState = [
  {
    value: "",
    type: INPUT_TYPES.TEXT,
    name: "name",
  },
  { value: "", name: "birthDate", type: INPUT_TYPES.TEXT },
  { value: "", name: "education", type: INPUT_TYPES.TEXT },
  { value: "", name: "workPlace", type: INPUT_TYPES.TEXT },
  { value: "", name: "experience", type: INPUT_TYPES.SELECT },
  { value: "", name: "email", type: INPUT_TYPES.TEXT },
  { value: "", name: "aboutYou", type: INPUT_TYPES.TEXTAREA },
];

export const formReducer = createReducer(initialState, {
  [CHANGE_FORM_FIELD]: (state, action) => {
    const { payload } = action;
    const idx = state.findIndex((e) => e.name === payload.field);
    state[idx].value = payload.value;
  },

  [SET_FORM_FIELDS]: (state, action) => {
    const { payload } = action;
    if (!payload.newState) return;
    const stateCopy = [...state];
    state = stateCopy.map((e) => {
      e.value = payload.newState[e.name];
    });
  },
});
