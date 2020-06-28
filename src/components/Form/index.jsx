import React from "react";
import styles from "./index.module.css";
import Input from "components/Input";
import { INPUT_INFO } from "utils/mock";
import { INPUT_TYPES } from "utils/constants";
import { useDispatch } from "react-redux";
import { changeFormField, setFormFields } from "store/actions/form";

const Form = () => {
  const dispatch = useDispatch();

  const getLocalStorageState = React.useCallback(() => {
    const localStorageState = JSON.parse(localStorage.getItem("formFields"));
    dispatch(setFormFields({ newState: localStorageState }));
    return localStorageState;
  }, [dispatch]);

  const [inputState, changeInputState] = React.useState(
    getLocalStorageState() || [
      {
        value: "",
        type: INPUT_TYPES.NAME_INPUT,
        name: "name",
      },
      { value: "", name: "birthDate", type: INPUT_TYPES.STRING_DATE },
      { value: "", name: "education", type: INPUT_TYPES.TEXT },
      { value: "", name: "workPlace", type: INPUT_TYPES.TEXT },
      { value: "", name: "experience", type: INPUT_TYPES.SELECT },
      { value: "", name: "skills", type: INPUT_TYPES.TEXT },
      { value: "", name: "aboutYou", type: INPUT_TYPES.TEXT },
      { value: "", name: "englishLevel", type: INPUT_TYPES.TEXT },
      { value: "", name: "wantToLearn", type: INPUT_TYPES.TEXT },
      { value: "", name: "email", type: INPUT_TYPES.EMAIL },
      { value: "", name: "contacts", type: INPUT_TYPES.TEXT },
    ]
  );

  const handleInputChange = React.useCallback(
    (e) => {
      const stateCopy = [...inputState];
      stateCopy[e.target.dataset.id].value = e.target.value;
      changeInputState(stateCopy);
      dispatch(
        changeFormField({
          value: e.target.value,
          field: stateCopy[e.target.dataset.id].name,
        })
      );
      localStorage.setItem("formFields", JSON.stringify(stateCopy));
    },
    [dispatch, inputState]
  );

  const renderedInputs = inputState.map((e, index) => (
    <>
      <p className={styles.input_title}>{INPUT_INFO[e.name].name}</p>
      <Input
        type={e.type}
        className={styles.input}
        onChange={handleInputChange}
        placeholder={INPUT_INFO[e.name].placeholder}
        value={e.value}
        field={e.name}
        data-id={index}
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
