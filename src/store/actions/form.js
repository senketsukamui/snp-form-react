import ActionTypes from "store/actions";

const { CHANGE_FORM_FIELD } = ActionTypes;

export const changeFormField = (payload) => {
  return { type: CHANGE_FORM_FIELD, payload };
};
