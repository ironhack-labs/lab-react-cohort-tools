import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <App />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
)
