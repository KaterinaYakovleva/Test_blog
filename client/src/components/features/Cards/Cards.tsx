import styles from "./Cards.module.css";
import type { Post } from "../../../../public/info";

interface OnePost {
  post: Post;
}

export default function Cards({ post }: OnePost) {
  return (
    <div className={styles.cards}>
      <div className={styles.card_container}>
        <img
          className={styles.foto}
          src={post.image.url}
          alt={post.image.alt}
        />
        <div className={styles.infoMain}>
          <span className={styles.data}>{post.date}</span>
          <span className={styles.time}>{post.readTime}</span>
          <span className={styles.comment}>{post.commentsCount}</span>
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.description}</p>
        <div className={styles.tags}>
          {post.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
