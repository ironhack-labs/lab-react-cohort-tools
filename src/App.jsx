import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import StudentDetailsPage from "./components/StudentDetailsPage";
import UserProfilePage from "./components/UserProfilePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students/:studentId" element={<StudentDetailsPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
