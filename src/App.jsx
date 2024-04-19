import "./App.css";
import Navbar from "./components/Navbar";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";

import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import ErrorPage from "./pages/ErrorPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      {/*   Add <Route /> components between <Routes> and </Routes>   */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students/:studentId" element={<StudentDetailsPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>

      <div className="pages">
        <HomePage />

        <StudentDetailsPage />

        <UserProfilePage />
      </div>
    </div>
  );
}

export default App;
