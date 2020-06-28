import React from "react";
import styles from "./index.module.css";
import { INPUT_TYPES, VALIDATION_ERRORS } from "utils/constants";
import { SELECT_OPTIONS } from "utils/mock";
import { validateTypedDate, validateTypedEmail } from "utils/validators";

const Input = (props) => {
  if (props.type === INPUT_TYPES.TEXT) {
    return (
      <input {...props} className={styles.input} maxLength="500" required />
    );
  } else if (props.type === INPUT_TYPES.SELECT) {
    const renderedOptions = SELECT_OPTIONS.map((e) => <option>{e}</option>);
    return (
      <>
        <select {...props} className={styles.select} required>
          {renderedOptions}
        </select>
      </>
    );
  } else if (props.type === INPUT_TYPES.STRING_DATE) {
    return (
      <>
        <input {...props} className={styles.input} required />
        {validateTypedDate(props.value) ? (
          ""
        ) : (
          <span>{VALIDATION_ERRORS.DATE_ERROR}</span>
        )}
      </>
    );
  } else if (props.type === INPUT_TYPES.NAME_INPUT) {
    return (
      <>
        <input {...props} className={styles.input} maxLength="255" required />
      </>
    );
  } else if (props.type === INPUT_TYPES.EMAIL) {
    return (
      <>
        <input {...props} className={styles.input} maxLength="255" required />
        {validateTypedEmail(props.value) ? (
          ""
        ) : (
          <span>{VALIDATION_ERRORS.EMAIL_ERROR}</span>
        )}
      </>
    );
  }
};

export default Input;
