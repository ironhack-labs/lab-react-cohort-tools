import { Link, useParams } from "react-router-dom";
import studentsData from "../assets/students.json";

function StudentDetailsPage() {
  const { studentId } = useParams();
  const student = studentsData.find((student) => student._id === studentId);

  if (!student) {
    return <p>Student not found</p>;
  }

  return (
    <div>
      <h1>Student Details</h1>
      <p>ID: {student._id}</p>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <Link to="/">Back</Link>
    </div>
  );
}

export default StudentDetailsPage;
