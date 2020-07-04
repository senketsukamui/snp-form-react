import React from "react";
import styles from "./index.module.css";

import { validators } from "utils/validators";

const Text = (props) => {
  return (
    <>
      <input {...props} className={styles.input} required />
      {validators[props.field].validate(props.value) ? (
        ""
      ) : (
        <div className={styles.error}>{validators[props.field].getError()}</div>
      )}
    </>
  );
};

export default React.memo(Text);
