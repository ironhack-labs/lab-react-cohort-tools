import React from "react";
import { Link } from "react-router-dom";

export default function StudentCard({ student }) {
  return (
    <tr>
      <td>
        <img src={student.image} alt={student.name} className="student-img" />
      </td>
      <td>
        <Link to={`/students/${student._id}`} className="student-link">
          {student.name}
        </Link>
      </td>
      <td>{student.program}</td>
      <td>{student.email}</td>
      <td>{student.phone}</td>
    </tr>
  );
}

