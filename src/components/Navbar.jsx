import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h2>Cohort Tools</h2>
      </Link>

      <Link to="/profile">
        <span>👤</span>
      </Link>
    </nav>
  );
}

export default Navbar;