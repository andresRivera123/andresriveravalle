import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./normalized.css";


document.documentElement.style.setProperty('--random', Math.random());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
