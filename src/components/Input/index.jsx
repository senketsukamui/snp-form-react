import React from "react";
import styles from "./index.module.css";
import { INPUT_TYPES } from "utils/constants";
import { SELECT_OPTIONS } from "utils/mock";

const Input = (props) => {
  if (props.type === INPUT_TYPES.TEXT) {
    return <input {...props} className={styles.input} />;
  } else if (props.type === INPUT_TYPES.SELECT) {
    const renderedOptions = SELECT_OPTIONS.map((e) => <option>{e}</option>);
    return (
      <select {...props} className={styles.select}>
        {renderedOptions}
      </select>
    );
  }
};

export default Input;
