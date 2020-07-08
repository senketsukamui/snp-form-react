import React from "react";
import styles from "./index.module.css";
import { useSelector } from "react-redux";

import { validators } from "utils/validators";

const Text = (props) => {
  const [isError, setErrorState] = React.useState(false);
  const errorMessage = useSelector(
    (state) => state.form[props.field].errorMessage
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
      {isError && <div className={styles.error}>{errorMessage}</div>}
    </>
  );
};

export default React.memo(Text);
