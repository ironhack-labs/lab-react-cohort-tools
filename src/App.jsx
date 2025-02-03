
import "./app.css";
import { Routes, Route } from "react-router-dom"; // Add Routes and Route
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";


function App() {
  console.log("App is rendering");
  return (
    
      <div className="App relative z-20 pt-20">
        <Navbar />

        <div className="pages">
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/students/:studentId" element={<StudentDetailsPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
