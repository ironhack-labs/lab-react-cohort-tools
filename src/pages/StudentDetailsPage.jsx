import { Link, useParams } from "react-router-dom";

function StudentDetailsPage() {
  const { studentId } = useParams();
  const student = students.find((s) => s._id === studentId);

  if (!student) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">Student not found</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-2">{student.name}</h2>
      <p><strong>City:</strong> {student.city}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Program:</strong> {student.program}</p>

      <Link to="/" className="text-blue-600 hover:underline block mt-4">
        ← Back to Home
      </Link>
    </div>
  );
}

export default StudentDetailsPage;

