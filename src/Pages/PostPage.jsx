import React from "react";
import { PostCard } from "../Components/PostCard";

export const PostPage = ({ posts }) => {
  return (
    <div className="post-page">
      {posts.map((p) => (
        <PostCard key={p.title} post={p} />
      ))}
    </div>
  );
};
