import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";  // Import BrowserRouter

// Get the root DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application with Router wrapping the App component
root.render(
  <React.StrictMode>
    <Router>  {/* Wrap the App with Router */}
      <App />
    </Router>
  </React.StrictMode>
);
