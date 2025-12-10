import { Router, Routes } from "react-router-dom";
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
        <HomePage />

        <StudentDetailsPage />

        <UserProfilePage />
      </div>

      <Routes>
        <Router path="/" element={ HomePage }></Router>
        <Router path="/students/:studentId" element={ StudentDetailsPage }></Router>
        <Router path="/profile" element={ UserProfilePage }></Router>
      </Routes>
    </div>
  );
}

export default App;
