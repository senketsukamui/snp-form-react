import React from "react";
import styles from "./index.module.css";

import { validators } from "utils/validators";

const Text = (props) => {
  console.log(props.value);
  const [isError, setErrorState] = React.useState(
    !validators[props.field].validate(props.value)
  );
  const textBlurHandler = () => {
    if (!validators[props.field].validate(props.value)) {
      setErrorState(true);
      return;
    }
    setErrorState(false);
  };
  return (
    <>
      <input
        {...props}
        className={styles.input}
        required
        onBlur={textBlurHandler}
      />
      {isError && (
        <div className={styles.error}>{validators[props.field].getError()}</div>
      )}
    </>
  );
};

export default React.memo(Text);
