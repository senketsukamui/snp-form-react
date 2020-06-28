import ActionTypes from "store/actions";

const { CHANGE_FORM_FIELD, SET_FORM_FIELDS } = ActionTypes;

export const changeFormField = (payload) => {
  return { type: CHANGE_FORM_FIELD, payload };
};

export const setFormFields = (payload) => {
  return { type: SET_FORM_FIELDS, payload };
};
