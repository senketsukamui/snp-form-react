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
        type: INPUT_TYPES.TEXT,
        name: "name",
      },
      { value: "", name: "birthDate", type: INPUT_TYPES.TEXT },
      { value: "", name: "education", type: INPUT_TYPES.TEXT },
      { value: "", name: "workPlace", type: INPUT_TYPES.TEXT },
      { value: "", name: "experience", type: INPUT_TYPES.SELECT },
      { value: "", name: "aboutYou", type: INPUT_TYPES.TEXT },
      { value: "", name: "email", type: INPUT_TYPES.TEXT },
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
    <div className={styles.form_field}>
      <Input
        type={e.type}
        className={styles.input}
        onChange={handleInputChange}
        value={e.value}
        field={e.name}
        data-id={index}
        id={index}
      />
      <label
        className={
          e.type === INPUT_TYPES.SELECT
            ? styles.select_label
            : styles.input_label
        }
        for={index}
      >
        {INPUT_INFO[e.name].name}*
      </label>
    </div>
  ));

  return (
    <form className={styles.form} action="novalidate">
      <div className={styles.title}>Форма для стажировки</div>
      <p className={styles.description}>
        Пожалуйста, заполни как можно подробнее данную заявку. Если у тебя есть
        готовое резюме, укажи на него ссылку.
      </p>
      <div className={styles.form_fields}>{renderedInputs}</div>
      <div className={styles.required}>* - эти поля обязательные</div>
    </form>
  );
};

export default Form;
