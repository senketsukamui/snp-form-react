import React from "react";
import styles from "./index.module.css";
import { INPUT_TYPES } from "utils/constants";
import { SELECT_OPTIONS } from "utils/mock";
import { validators } from "utils/validators";

const Input = (props) => {
  if (props.type === INPUT_TYPES.TEXT) {
    console.log(props.field);
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
    const renderedOptions = SELECT_OPTIONS.map((e) => <option>{e}</option>);
    return (
      <>
        <select {...props} className={styles.select} required>
          {renderedOptions}
        </select>
      </>
    );
  }
};

export default Input;
