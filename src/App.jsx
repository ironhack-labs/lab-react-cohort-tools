
import "./App.css";
import Navbar from "./components/Navbar";
import AppRoutes from "./Routes/AppRoutes";





function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />
      <AppRoutes />
      <div className="pages">

      </div>

    </div>

  );
}

export default App;
