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

      <div className="pages">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/student/:id" element={<StudentDetailsPage />} />
          <Route path="/user/:id" element={<UserProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
