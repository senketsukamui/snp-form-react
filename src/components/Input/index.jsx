import React from "react";
import styles from "./index.module.css";
import { INPUT_TYPES } from "utils/constants";
import { SELECT_OPTIONS } from "utils/mock";
import { validators } from "utils/validators";

const Input = (props) => {
  if (props.type === INPUT_TYPES.TEXT) {
    return (
      <>
        <input {...props} className={styles.input} required />
        {validators[props.field].validate(props.value) ? (
          ""
        ) : (
          <div className={styles.error}>
            {validators[props.field].getError()}
          </div>
        )}
      </>
    );
  } else if (props.type === INPUT_TYPES.SELECT) {
    const renderedOptions = SELECT_OPTIONS.map((e, index) => (
      <option key={index}>{e}</option>
    ));
    return (
      <>
        <select {...props} className={styles.select} required>
          {renderedOptions}
        </select>
      </>
    );
  } else if (props.type === INPUT_TYPES.TEXTAREA) {
    return (
      <>
        <textarea {...props} className={styles.textarea} required></textarea>
        {validators[props.field].validate(props.value) ? (
          ""
        ) : (
          <div className={styles.error}>
            {validators[props.field].getError()}
          </div>
        )}
      </>
    );
  }
};

export default Input;
