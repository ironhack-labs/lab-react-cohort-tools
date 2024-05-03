import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "/HomePage.jsx";
import StudentDetailsPage from "/pages/StudentDetailsPage";
import UserProfilePage from "/pages/UserProfilePage";


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <div className="pages">
        <Routes>
        <Route path="/pages/HomePage" element={<HomePage />} />
        <Route path="/pages/StudentDetailsPage" element={<StudentDetailsPage />} />
        <Route path="/pages/UserProfilePage" element={<UserProfilePage />} />
        <HomePage />

        <StudentDetailsPage />

        <UserProfilePage />
        </Routes>
      </div>
      
    </div>
    
  );
}

export default App;
