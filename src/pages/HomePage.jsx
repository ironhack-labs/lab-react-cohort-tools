import { Link } from "react-router-dom";
import studentsData from "../assets/students.json";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {studentsData.map((student) => (
          <li key={student._id}>
            <Link to={`/students/${student._id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
