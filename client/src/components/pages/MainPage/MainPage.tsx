import { useState, type JSX } from "react";
import posts from "../../../public/info";
import Cards from "../../features/Cards/Cards";

export default function MainPage(): JSX.Element {
  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <Cards key={post.id} post={post} />
      ))}
    </>
  );
}
