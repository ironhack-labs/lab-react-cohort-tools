// src/pages/StudentDetailsPage.jsx
import { Link, useParams } from "react-router-dom";

// Dummy data for testing
const students = [
  { _id: '1', name: 'Student One', details: 'Details of Student One' },
  { _id: '2', name: 'Student Two', details: 'Details of Student Two' },
  { _id: '3', name: 'Student Three', details: 'Details of Student Three' },
];

function StudentDetailsPage() {
  const { studentId } = useParams();
  const student = students.find(s => s._id === studentId);

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div>
      <h1>Student Details</h1>
      <p>Student ID: {student._id}</p>
      <p>Name: {student.name}</p>
      <p>Details: {student.details}</p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default StudentDetailsPage;
