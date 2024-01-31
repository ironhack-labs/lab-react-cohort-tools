import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentDetailsPage from './pages/StudentDetailsPage';
import UserProfilePage from './pages/UserProfilePage';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students/:studentId" element={<StudentDetailsPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        {/* Add any other routes here */}
      </Routes>
    </>
  );
}

export default App;