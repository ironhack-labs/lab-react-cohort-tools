import { useParams, Link } from "react-router-dom";
import studentsData from "../assets/students.json"; 

function StudentDetailsPage() {
  const { studentId } = useParams();
  const student = studentsData.find((eachStudent) => eachStudent._id === studentId);
  if (!student) {
    return (
      <div className="StudentDetailsPage">
        <p>Estudiante no encontrado</p>
        <Link to="/"><button>Back</button></Link>
      </div>
    );
  }
  return (
    <div className="StudentDetailsPage">
      <Link to="/">
        <button>Back</button>
      </Link>

      <div className="student-profile">
        <img src={student.image} alt={student.name} />
        <h2>{student.name}</h2>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Program:</strong> {student.program}</p>
      </div>
    </div>
  );
}

export default StudentDetailsPage;
