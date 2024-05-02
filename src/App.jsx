import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App relative z-20 pt-20">
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/students/:studentId" Component={StudentDetailsPage} />
        <Route path="/profile" Component={UserProfilePage} />
      </Routes>
    </div>
  );
}

export default App;
