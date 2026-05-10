import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import "./App.css";
 

function App() {



  return (
    <>
      <Navbar />
      <div className="pt-20" style={{ marginTop: "80px" }}> 

        
       <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/students/:studentId" element={<StudentDetailsPage />} />
    <Route path="/profile" element={<UserProfilePage />} />
</Routes>
      </div>
    </>
  );
}

export default App;