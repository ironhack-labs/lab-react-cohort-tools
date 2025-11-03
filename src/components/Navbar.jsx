import { Link } from "react-router-dom";
import logo from "./assets/logo-ironhack-blue.png"; 

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-100 border-b">
      <Link to="/">
        <img src={logo} alt="Ironhack logo" className="h-10" />
      </Link>

      <Link to="/profile" className="text-blue-700 hover:underline">
        👤 Profile
      </Link>
    </nav>
  );
}

export default Navbar;
