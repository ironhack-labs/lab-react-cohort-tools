import { Link } from "react-router-dom";

function UserProfilePage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <p>This is your profile page.</p>

      <Link to="/" className="text-blue-600 hover:underline block mt-4">
        ← Back to Home
      </Link>
    </div>
  );
}

export default UserProfilePage;
