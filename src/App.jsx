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
        <Route path="/HomePage" element={ <HomePage /> } />

        <Route path="StudentDetailsPage" element={ <StudentDetailsPage /> } />

        <Route path="UserProfilePage" element={ <UserProfilePage /> } />
      </div>

    </div>
  );
}

export default App;
