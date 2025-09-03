import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const PostForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      id: crypto.randomUUID(),
      title: titleRef.current.value,
      body: contentRef.current.value,
    };

    onSubmit(post);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={titleRef} placeholder="titre " />
      <textarea ref={contentRef} placeholder="contenu" />
      <button type="submit">créer</button>
    </form>
  );
};
