/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import styles from "./Research.module.css";

export default function Research() {
  const [input, setInput] = useState<string>("");
  const [button, setButton] = useState<boolean>(true);

  const hadleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleButtonChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
      setButton(prev => !prev);
  };

  return (
    <div className={styles.research_part}>
      <span className={styles.blog}>Блог</span>
      <input
        className={styles.research}
        type="text"
        name="text"
        onChange={hadleChange}
        placeholder="Поиск"
      ></input>
      <button
        className={`${styles.filter} ${button ? 'active' : 'inactive'}`}
        type="button"
        onClick={handleButtonChange}
      >
        {button ? "Фильтр" : "Скрыть фильтр ^"}
      </button>
      <div> Здесь фильтры</div>
    </div>
  );
}
