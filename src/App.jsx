import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import { Link, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <div className="pages">
        <Routes>
          <Route
          path="/"
          Component={HomePage} >
        </Route>
        <Route
        path="/students/:studentId"
        Component={StudentDetailsPage} >
        </Route>
        <Route
        path="/profile"
        Component={UserProfilePage} >
        </Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
