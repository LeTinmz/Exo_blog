import React from "react";

export const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
    </div>
  );
};
