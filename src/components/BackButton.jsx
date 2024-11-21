import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link
      to="/"
      className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out"
    >
      Back
    </Link>
  );
}

export default BackButton;
