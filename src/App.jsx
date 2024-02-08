import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {

  return (
    <main>
      <Navbar />
      <div className="App relative z-20 pt-20">
      <div className="pages">
      <Routes>
      <Route path='/' element={<HomePage />} />
      
      <Route path="/profile" element={<UserProfilePage/>}/>
      <Route path="/students/:studentId" element={<StudentDetailsPage /* studentsData = {studentsData} *//>}/>
      </Routes>
      </div>
      </div>
    </main>
  );
}

export default App;
