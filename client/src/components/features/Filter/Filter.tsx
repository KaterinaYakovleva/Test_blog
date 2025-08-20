import styles from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={styles.fltr_btn}>
      <button type="button">Город +</button>
      <button type="button">Люди +</button>
      <button type="button">Животные +</button>
      <button type="button">Еда +</button>
      <button type="button">Напитки +</button>
      <button type="button">Архитектура +</button>
      <button type="button">Искусство +</button>
    </div>
  );
}
