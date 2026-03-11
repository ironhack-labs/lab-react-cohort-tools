import { useState } from "react";
import studentsData from "../assets/students.json";
import StudentCard from "../components/StudentCard";
import { Link } from "react-router-dom";

function HomePage() {
  const [students] = useState(studentsData);

  return (
    <div className="border-2 border-rose-500 m-2">
      <h1>Home Page</h1>

      {students.map((student) => {
        return (
          <Link key={student._id} to={`/students/${student._id}`}>
            <StudentCard {...student} />
          </Link>
        );
      })}
    </div>
  );
}

export default HomePage;
