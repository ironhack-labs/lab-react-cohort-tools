import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);


  // Find the current student profile by id.
  // In this case, the student with id 1. The `studentId` is hard-coded for now.
  // This could be a URL parameter from React Router, e.g. /students/:studentId
  // const studentId = "1";
  // const studentProfile = studentsData.find((student) => student._id === studentId);

