import React from "react";
import styles from "./index.module.css";
import Input from "components/Input";
import { INPUT_INFO } from "utils/mock";
import { INPUT_TYPES } from "utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeFormField, setFormFields } from "store/actions/form";

const Form = () => {
  const dispatch = useDispatch();

  const fields = useSelector((state) => state.form);

  const fieldsKeys = Object.keys(fields);

  const handleInputChange = React.useCallback(
    (e) => {
      dispatch(
        changeFormField({
          value: e.target.value,
          field: e.target.dataset.field,
        })
      );
    },
    [dispatch]
  );

  const renderedInputs = React.useMemo(
    () =>
      fieldsKeys.map((e, index) => (
        <div className={styles.form_field} key={index}>
          <Input
            type={fields[e].type}
            className={styles.input}
            onChange={handleInputChange}
            value={fields[e].value}
            field={fields[e].name}
            data-field={fields[e].name}
            id={index}
            key={index}
          />
          <label
            className={
              fields[e].type === INPUT_TYPES.SELECT
                ? styles.select_label
                : styles.input_label
            }
            htmlFor={index}
          >
            {INPUT_INFO[e].name}*
          </label>
        </div>
      )),
    [fields, fieldsKeys, handleInputChange]
  );

  return (
    <form className={styles.form} noValidate>
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

export default React.memo(Form);
