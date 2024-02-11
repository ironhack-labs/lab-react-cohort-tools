import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import UserProfilePage from "./pages/UserProfilePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/students/:studentId" element={<StudentDetailsPage />}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </main>
  );
}

export default App;
