import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">
        <img src="../assets/logo-ironhack-blue.png" alt="Logo" />
      </Link>
      <Link to="/profile">
        <img src="../assets/profile-icon.png" alt="User Profile" />
      </Link>
    </nav>
  );
}
export default Navbar;