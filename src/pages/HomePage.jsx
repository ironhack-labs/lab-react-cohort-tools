import { useState } from "react";
import StudentCard from "../components/StudentCard";

import studentsData from "../assets/students.json";
import { Link } from "react-router-dom";

function HomePage({ students }) { 
  return (
    <div className="HomePage">
      <h1>Students List</h1>
      <div className="students-list">
        {students && students.map((student) => {
          return (
            <Link to={`/students/${student._id}`} key={student._id} className="student-card">
              <div>
                <img src={student.image} alt={student.name} />
                <p>{student.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default HomePage;
