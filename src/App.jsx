import "./App.css";
import React from 'react';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Importo las rutas que ya están instaladas

function App() {
  return (
    
      <div className="App relative z-20 pt-20">
        <Navbar />
        
        <div className="pages">
          
          <Routes>
            {/* Ruta para HomePage */}
            <Route path="/" element={<HomePage />} />

            {/* Ruta para StudentDetailsPage con studentId */}
            <Route path="/students/:studentId" element={<StudentDetailsPage />} />

            {/* Ruta para UserProfilePage */}
            <Route path="/profile" element={<UserProfilePage />} />
          </Routes>
        </div>
        
      </div>
    
  );
}

export default App;

