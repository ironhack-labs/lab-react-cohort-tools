import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";


function App() {

  return (
    <div className="App relative z-20 pt-20">

      <Routes>

        <Route path="/" element={<HomePage />}/>
        {/* <div className="pages"> */}
        
        <Route path="/students/:studentId" element={<StudentDetailsPage />}/>
        <Route path="/profile" element={<UserProfilePage />}/>
        {/* </div> */}
      </Routes>

      <Navbar />
    </div>
  );
}

export default App;
