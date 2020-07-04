import React from "react";
import styles from "./index.module.css";
import { validators } from "utils/validators";

const Textfield = (props) => {
  return (
    <>
      <textarea {...props} className={styles.textarea} required></textarea>
      {validators[props.field].validate(props.value) ? (
        ""
      ) : (
        <div className={styles.error}>{validators[props.field].getError()}</div>
      )}
    </>
  );
};

export default React.memo(Textfield);
