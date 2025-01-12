import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "../client/HelloWorld.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <HelloWorld />
  </StrictMode>
);
