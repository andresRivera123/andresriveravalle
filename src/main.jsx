import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./normalized.css";
import { Footer } from "./assets/components/Footer.jsx";

document.documentElement.style.setProperty("--random", Math.random());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <App />
      <footer className="container__section ">
        <Footer />
      </footer>
    </>
  </React.StrictMode>
);
