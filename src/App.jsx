import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App relative z-20 pt-20">
        <Navbar />
        <Routes>
          {/* <div className="pages"> */}
          <Route path="/" element={<HomePage />} />

          <Route
            path="/student-details-page/:studentId"
            element={<StudentDetailsPage />}
          />

          <Route path="/user-profile-page" element={<UserProfilePage />} />
          {/* </div> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
