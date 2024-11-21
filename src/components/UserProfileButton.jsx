import { Link } from "react-router-dom";

function UserProfileButton() {
  return (
    <Link to="/profile" className="flex items-center text-l py-1">
      <img
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-1.png"
        alt="Logo"
        className="h-10 w-auto border-solid border border-white rounded-3xl p-1"
      />
    </Link>
  );
}

export default UserProfileButton;
