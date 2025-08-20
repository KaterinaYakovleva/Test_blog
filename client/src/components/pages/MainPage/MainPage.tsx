import {  type JSX } from "react";
import posts from "../../../../public/info";
import Cards from "../../features/Cards/Cards";
import styles from "./MainPage.module.css"

export default function MainPage(): JSX.Element {
  console.log(posts);
  return (
    <div className={styles.main}>
      {posts.map((post) => (
        <Cards key={post.id} post={post} />
      ))}
    </div>
  );
}
