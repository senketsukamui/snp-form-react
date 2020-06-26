import React from "react";
import styles from "./index.module.css";

const Input = (props) => {
  const { type, onInputChange, value, field } = props;
  const handleInputChange = (e) => {
    onInputChange();
  };
  return <input type={type} />;
};

export default Input;
