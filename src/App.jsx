import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";


export default function App() {
  return (
    <div className="App relative z-20 pt-20">

      <Navbar />
      <nav>
        <Link to='/'>Homepage | </Link>
        <Link to='/students/:studentId'>StudentDetailsPage | </Link>
        <Link to='/profile'>UserProfilePage</Link>
    </nav>

      <div className="pages">
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/students/:studentId" element={<StudentDetailsPage />} />
      <Route path="/profile" element={<UserProfilePage />} />
    </Routes>
      </div>
    </div>
    
    );
    }
  
