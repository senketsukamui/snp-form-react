import React from "react";
import styles from "./index.module.css";
import Input from "components/Input";
import { INPUT_TYPES, INPUT_NAMES } from "utils/constants";
const Form = () => {
  const [inputState, changeInputState] = React.useState([
    {
      value: "",
      type: INPUT_TYPES.TEXT,
      name: "name",
    },
    { value: "", name: "birthDate", type: INPUT_TYPES.TEXT },
    { value: "", name: "education", type: INPUT_TYPES.TEXT },
    { value: "", name: "workPlace", type: INPUT_TYPES.TEXT },
    { value: "", name: "experience", type: INPUT_TYPES.TEXT },
    { value: "", name: "skills", type: INPUT_TYPES.TEXT },
    { value: "", name: "aboutYou", type: INPUT_TYPES.TEXT },
    { value: "", name: "englishLevel", type: INPUT_TYPES.TEXT },
    { value: "", name: "wantToLearn", type: INPUT_TYPES.TEXT },
    { value: "", name: "contacts", type: INPUT_TYPES.TEXT },
  ]);

  const changeGlobalInput = (field, value) => {
    
  }

  const renderedInputs = inputState.map((e) => (
    <>
      <p className={styles.input_title}>{INPUT_NAMES[e.name]}</p>
      <Input
        type={e.type}
        className={styles.input}
        onInputChange={changeInputState}
        value={e.value}
        field={e.name}
      />
    </>
  ));

  return (
    <form className={styles.form} action="novalidate">
      <div className={styles.title}>Форма для стажировки</div>
      <p className={styles.description}>
        Пожалуйста, заполни как можно подробнее данную заявку. Если у тебя есть
        готовое резюме, укажи на него ссылку.
      </p>
      {renderedInputs}
    </form>
  );
};

export default Form;
