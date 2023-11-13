import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./normalized.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* const router = createBrowserRouter([
  { path: "/", element: <Home/>, errorElement: <h1>Error</h1> },
  { path: "/about-me", element: <About/> },
  { path: "/projects", element: <h1>projects</h1> },
  { path: "/achievements", element: <h1>achievements</h1> },
  { path: "/contact", element: <h1>contact</h1> },
  { path: "/contact", element: <h1>contact</h1> },
]); */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App/>
  </React.StrictMode>
);
