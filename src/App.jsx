import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import ErrorPage from "./pages/ErrorPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App relanpm tive z-20 pt-20">
      <Navbar />

      {/*   Add <Route /> components between <Routes> and </Routes>   */}
      {
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students/:studentId" element={<StudentDetailsPage />} />
          <Route path="/profile" element={<UserProfilePage />} />

          <Route path="*" element={<h1>404 Page</h1>} />
        </Routes>
      }
      <div className="pages">
        {/*  <HomePage />

        <StudentDetailsPage />

        <UserProfilePage /> */}
      </div>
    </div>
  );
}

export default App;
