import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const PostDetailPage = ({ posts, onDelete }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const post = posts.find((p) => p.id.toString() === id);

  const handleDelete = () => {
    onDelete(post.id);
    navigate("/");
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <button onClick={handleDelete}>Delete Post</button>
      <Link to={"/"}>
        <button>Go back</button>
      </Link>
    </div>
  );
};
