import { useState } from "react";
import StudentCard from "../components/StudentCard";
import studentsData from "../assets/students.json";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Import the CSS file

function HomePage() {
  const [students, setStudents] = useState(studentsData);

  return (
    <div className="home-page-container">
      <h1>Home Page</h1>
      <div className="header">
        <span className="column">Image</span>
        <span className="column">Name</span>
        <span className="column">Program</span>
        <span className="column">Email</span>
        <span className="column">Phone</span>
      </div>

      {students &&
        students.map((student) => {
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
