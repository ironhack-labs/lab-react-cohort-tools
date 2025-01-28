import placeholderImage from "../assets/profile-icon.png";
import { Link } from "react-router-dom";

function StudentCard({
  _id,
  firstName,
  lastName,
  email,
  phone,
  program,
  image,
  className,
}) {
  return (
    <Link to={`/students/${_id}`}>
      <div className="StudentCard">
        <span>{firstName} {lastName}</span>
        {/* Add other details */}
      </div>
    </Link>
  );
}

export default StudentCard;
