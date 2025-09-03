import { useState, useEffect } from "react";
import axios from "axios";
import api from "./Services/api";
import "./App.css";
import { PostCard } from "./Components/PostCard";
import { Navigation } from "./Components/Navigation";
import { PostPage } from "./Pages/PostPage";
import { Route, Routes, NavLink, Outlet } from "react-router-dom";
import { NotFound } from "./Components/NotFound";
import { PostForm } from "./Components/PostForm";
import { CreatePostPage } from "./Pages/CreatePostPage";
import { PostDetailPage } from "./Pages/PostDetailPage";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/posts");
        setPosts(res.data.slice(0, 3));
        console.log(res.data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const deletePost = (postId) => {
    setPosts((prev) => prev.filter((post) => post.id !== postId));
  };
  return (
    <>
      <Routes>
        <Route element={<Navigation />}>
          <Route index element={<PostPage posts={posts} />}></Route>
          <Route
            path={"postForm"}
            element={
              <CreatePostPage
                onSubmit={(post) => setPosts((prev) => [...prev, post])}
              />
            }
          ></Route>
          <Route
            path="posts/:id"
            element={<PostDetailPage posts={posts} onDelete={deletePost} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>

      {/* {isLoading ? (
        <p>Loading data... </p>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )} */}
    </>
  );
}

export default App;
