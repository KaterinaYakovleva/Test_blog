import styles from "./Cards.module.css";

export default function Cards({post}) {
  return (
    <div className={styles.card_container}>
      {/* <img className={styles.card_img}>{post.image.url}</img> */}
      <h1>{post.title}</h1>

    </div>
  );
}
