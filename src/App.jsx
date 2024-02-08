import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";

import studentsData from "./assets/students.json"


function App() {

@@ -12,11 +15,14 @@ function App() {
      <Navbar />

      <div className="pages">
        <HomePage />
        <Routes>
          <Route path="/" element={<HomePage />} />

        <StudentDetailsPage />
          {/* <Route path="/students/:studentId" element={<StudentDetailsPage />} /> */}
          <Route path="/students/:studentId" element={<StudentDetailsPage studentsData={studentsData}/> }/>

        <UserProfilePage />
          <Route path="/profile" element={<UserProfilePage/>}/>
        </Routes>
      </div>

    </div>