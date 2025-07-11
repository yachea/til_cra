import React from "react";
import ReactDOM from "react-dom/client";
// css
import "./index.css";
import StartPage from "./pages/StartPage";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import Comments from "./pages/Comments";
import Test from "./pages/Test";
import RegisterPage from "./pages/RegisterPage";

// 컴포넌트
const root = ReactDOM.createRoot(document.getElementById("root"));
const Hello = function () {
  return <div></div>;
};

root.render(
  <div className="wrap">
    <RegisterPage />
  </div>,
);
