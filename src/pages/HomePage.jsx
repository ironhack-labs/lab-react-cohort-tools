import { Link } from 'react-router-dom';
import StudentCard from "../components/StudentCard";
import studentsData from "../assets/students.json";
import { useState } from "react";

function HomePage() {
  const [students, setStudents] = useState(studentsData);

  return (
    <div className="border-2 border-rose-500 m-2">
      <h1>Home Page</h1>
     

      {students.map((student) => (
        <Link key={student._id} to={`/students/${student._id}`} style={{ textDecoration: 'none' }}>
          <div className="m-2 hover:bg-gray-200">
            <StudentCard {...student} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
