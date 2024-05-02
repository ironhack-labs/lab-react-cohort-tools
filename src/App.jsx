import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      {/* <div className="pages">
        <HomePage />

        <StudentDetailsPage />

        <UserProfilePage />
      </div> */}

      {/* Router */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students/:studentId" element={<StudentDetailsPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </div>
  );
}

export default App;
