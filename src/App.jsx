import React from 'react';
import "./App.css";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App relative z-20 pt-20">
      <nav>
        <div className="logo">
        <Link to="/"> Home Page </Link>
        </div>
        <div className="user-icon">
      <Link to="/profile"> User Profile Page</Link>
      </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/students/:studentId" element={<StudentDetailsPage/>} />;
        <Route path="/profile" element={<UserProfilePage/>} />;
      </Routes>
      <div className="pages">
        <HomePage />

        <StudentDetailsPage />

        <UserProfilePage>
        <div className='back-button'>
        <Link to="/"> Home Page </Link>
        <UserProfilePage/>
        


      </div>

    </div>
  );
}

export default App;
