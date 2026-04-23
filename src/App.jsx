import "./App.css";

import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { StudentDetailsPage } from "./pages/StudentDetailsPage";

function App() {
  return (
    <div className="App">
      <div className="pages">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student-details/:studentId" element={<StudentDetailsPage />}/>
          <Route path="/user-profile" element={<UserProfilePage />} />
          <Route path="/student-details" element={<StudentDetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
