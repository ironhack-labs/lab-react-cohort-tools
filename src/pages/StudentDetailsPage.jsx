import { useParams, Link } from "react-router-dom";

// Importa aquí el array de estudiantes de tu proyecto
import students from "../assets/students.json";

function StudentDetailsPage() {

  const { studentId } = useParams();

  const student = students.find((student) => {
    return student._id === studentId;
  });

  if (!student) {
    return <h2>Student not found</h2>;
  }

  return (
    <div>
      <h1>Student Details</h1>

      <h2>
        {student.firstName} {student.lastName}
      </h2>

      <p>Email: {student.email}</p>

      <p>Phone: {student.phone}</p>

      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default StudentDetailsPage;