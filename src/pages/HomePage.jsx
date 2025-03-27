import { Link } from "react-router-dom";
import students from "../data/students.json";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link to={`/students/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
