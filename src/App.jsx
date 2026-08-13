import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import { Routes, Route } from "react-router-dom";


function App() {

 return (
    <div className="App relative z-20 pt-20">
      
        <Navbar />

        <div className="pages">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* Student Details Page */}
            <Route path="/students/:studentId" element={<StudentDetailsPage />} />

            {/* User Profile Page */}
            <Route path="/profile" element={<UserProfilePage />} />
          </Routes>
        </div>
      
    </div>
  );
}

export default App;
