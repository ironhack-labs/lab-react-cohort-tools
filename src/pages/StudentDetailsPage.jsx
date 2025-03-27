import { useParams, Link } from "react-router-dom";
import students from "../data/students.json";

const StudentDetailsPage = () => {
  const { studentId } = useParams();
  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return <p>Student not found</p>;
  }

  return (
    <div>
      <h1>{student.name}</h1>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <Link to="/">🔙 Back</Link>
    </div>
  );
};

export default StudentDetailsPage;
