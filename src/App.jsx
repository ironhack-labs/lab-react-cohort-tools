import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";


function App() {

  return (
    
    <div className="App relative z-20 pt-20">
      <Navbar />
      
      <div className="pages"> 
      <Routes>
        {/* <HomePage /> */}
        <Route path="/" element={<HomePage />} />

        {/* <StudentDetailsPage /> */}
        <Route path="/students/:studentId" element={<StudentDetailsPage />} />
        {/* <UserProfilePage /> */}
        <Route path="/User" element={<UserProfilePage />} />
        </Routes>
      </div>
      
    </div>
    
  );
}

export default App;
