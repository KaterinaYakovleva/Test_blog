import React, { useState } from "react";
import styles from "./Research.module.css";
import Filter from "../Filter/Filter";

export default function Research() {
  const [input, setInput] = useState({});
  const [button, setButton] = useState<boolean>(true);

  const hadleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  console.log(input);
  const handleButtonChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setButton((prev) => !prev);
  };

  return (
    <div className={styles.research_part}>
      <div className={styles.modal_part}>
        <span className={styles.blog}>Блог</span>
        <input
          className={styles.research}
          type="text"
          name="text"
          onChange={hadleChange}
          placeholder="Поиск"
        ></input>
        {!button && <button className={styles.btn_delete}>Очистить</button>}
        <button
          className={`${styles.filter} ${button ? "active" : "inactive"}`}
          type="button"
          onClick={handleButtonChange}
        >
          {button ? "Фильтр" : "Скрыть фильтр ^"}
        </button>
      </div>
      <div>{!button && <Filter />}</div>
    </div>
  );
}
