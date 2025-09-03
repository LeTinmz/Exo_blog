import React from "react";
import { PostForm } from "../Components/PostForm";

export const CreatePostPage = ({ onSubmit }) => {
  return (
    <div>
      <PostForm onSubmit={onSubmit} />
    </div>
  );
};
