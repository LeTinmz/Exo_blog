import React from "react";
import { Link, useParams } from "react-router-dom";

export const PostDetailPage = ({ posts }) => {
  const { id } = useParams();

  const post = posts.find((p) => p.id.toString() === id);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <Link to={"/"}>
        <button>Go back</button>
      </Link>
    </div>
  );
};
