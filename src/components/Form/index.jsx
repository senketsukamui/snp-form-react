import React from "react";
import styles from "./index.module.css";

const Form = () => {
  return (
    <form className={styles.form} action="novalidate">
      <div className={styles.title}>Форма для стажировки</div>
      <p className={styles.description}>
        Пожалуйста, заполни как можно подробнее данную заявку. Если у тебя есть
        готовое резюме, укажи на него ссылку.
      </p>
      <p className={styles.input_title}>ФИО</p>
      <input type="text" className={styles.input} />
      <p className={styles.input_title}>Дата рождения</p>
      <input type="text" className={styles.input} />
      <p className={styles.input_title}>Образование</p>
      <input type="text" className={styles.input} />
      <p className={styles.input_title}>Место работы</p>
      <input type="text" className={styles.input} />
      <p className={styles.input_title}>Опыт в разработке</p>
      <input type="text" className={styles.input} />
      <p className={styles.input_title}>Технологии/умения</p>
      <input type="text" className={styles.input} />
      <p className={styles.input_title}>О себе</p>
      <input type="text" className={styles.input} />
      <p className={styles.input_title}>Уровень владения английским</p>
      <input type="text" className={styles.input} />
      <p className={styles.input_title}>Опыт в разработке</p>
      <input type="text" className={styles.input} />
      <p className={styles.input_title}>Что хочешь изучать</p>
      <input type="text" className={styles.input} />
      <p className={styles.input_title}>Контакты</p>
      <input type="text" className={styles.input} />
      <p className={styles.input_title}>Введите ФИО</p>
      <input type="text" className={styles.input} />
    </form>
  );
};

export default Form;
