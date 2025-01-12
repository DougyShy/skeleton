// index.js (React 18+)
import React from "react";
import { createRoot } from "react-dom/client"; // Correct import
import HelloWorld from "./HelloWorld.jsx";

const root = createRoot(document.getElementById("root")); // Create root node
root.render(<HelloWorld />); // Render component
