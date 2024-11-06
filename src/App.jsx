import "./App.css"
import Navbar from "./components/Navbar"
import AppRoutes from "./routes/AppRoutes"


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <div className="pages">

      <AppRoutes />

      </div>

    </div>
  );
}

export default App;
