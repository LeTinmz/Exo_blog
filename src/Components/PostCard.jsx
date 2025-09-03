import React from "react";
import { Link } from "react-router-dom";

export const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <Link to={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
    </div>
  );
};
