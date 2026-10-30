import { Link } from "react-router-dom";
import students from "../assets/students.json";

function HomePage() {
  return (
    <div>
      <h1>Students</h1>

      {students.map((student) => (
        <Link
          key={student._id}
          to={`/students/${student._id}`}
        >
          <div>
            <h3>
              {student.firstName} {student.lastName}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;