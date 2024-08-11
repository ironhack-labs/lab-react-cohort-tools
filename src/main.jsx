import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter> 
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/students/:studentId" element={<StudentDetailsPage />} />
      <Route path="/profile" element={<UserProfilePage/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
