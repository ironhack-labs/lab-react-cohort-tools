import { Link } from "react-router-dom";
import logo from "../assets/logo-ironhack-blue.png";

function HomeButton() {
  return (
    <Link to="/" className="flex items-center text-l py-1">
      <img src={logo} alt="Logo" className="h-8 w-auto" />
    </Link>
  );
}

export default HomeButton;
