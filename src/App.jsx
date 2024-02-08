import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import { Routes, Route } from "react-router-dom";



function App() {

  return (
 /* 
    <div className="App relative z-20 pt-20">
      <Navbar />

      <div className="pages">
        <HomePage />

        <StudentDetailsPage />

        <UserProfilePage />
      </div>

    </div>
 */
<main>
  <Navbar />

  <Routes>
    <Route path="/" element = {<HomePage/>}/>

    <Route path="/UserProfilePage" element = {<UserProfilePage/>}/>

    <Route path="/students/:studentId" element = {<StudentDetailsPage /> }/>

  </Routes>
</main>
  );
}

export default App;
