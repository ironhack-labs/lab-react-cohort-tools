// src/pages/UserProfilePage.jsx
import { Link } from "react-router-dom";

function UserProfilePage() {
  return (
    <div>
      <h1>User Profile</h1>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default UserProfilePage;
