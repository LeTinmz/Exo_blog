import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export const Navigation = () => {
  return (
    <>
      <h1>My blog bebey</h1>
      <nav>
        <NavLink to="/">Home</NavLink> {" | "}
        <NavLink to="/postForm">Create a Post</NavLink>
      </nav>

      <main
        style={{
          border: "1px solid black",
          padding: "5rem 0",
          textAlign: "center",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};
