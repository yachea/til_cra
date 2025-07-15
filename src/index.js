import React from "react";
import ReactDOM from "react-dom/client";
// css
import "./index.css";
import App from "./App";

// 컴포넌트
const root = ReactDOM.createRoot(document.getElementById("root"));
const Hello = function () {
  return <div></div>;
};

root.render(
  <div className="wrap">
    <App />
  </div>,
);
