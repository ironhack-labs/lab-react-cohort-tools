import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import {Routes ,Route, Link} from  "react-router-dom";

function App() {
  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <div className="pages">

      <nav>
        <Link to="/">HomePage</Link>
        <Link to="/students/:studentId">StudentDetailsPage</Link>
        <Link to="/profile">UserProfilePage</Link>
      </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students/:studentId" element={<StudentDetailsPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="*" element={<p>404, this page doesnt exist...</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
