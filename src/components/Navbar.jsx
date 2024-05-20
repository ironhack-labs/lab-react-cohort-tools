import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import userIcon from "../assets/user-icon.png";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <Link to="/profile">
        <img src={userIcon} alt="User Profile" className="user-icon" />
      </Link>
    </nav>
  );
}

export default Navbar;
