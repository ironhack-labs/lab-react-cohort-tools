import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar flex justify-between p-4 bg-white shadow">
      <Link to="/" className="font-bold text-xl">
        Logo
      </Link>
      <Link to="/profile" className="font-bold text-xl">
        User Icon
      </Link>
    </nav>
  );
}

export default Navbar;
