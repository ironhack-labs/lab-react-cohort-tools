import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App relative z-20 pt-20">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
