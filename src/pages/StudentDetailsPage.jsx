import { useParams } from "react-router-dom";
import studentsData from "../assets/students.json"; // Import students data
import { Link } from "react-router-dom";

function StudentDetailsPage() {
  // Get the studentId from the URL
  const { studentId } = useParams();

  // Find the student that matches the studentId
  const student = studentsData.find((s) => s._id === studentId);

  // If no student is found, display an error message or redirect
  if (!student) {
    return <div>Student not found!</div>;
  }

  return (
    <div className="StudentDetailsPage bg-gray-100 py-6 px-4 border-2 border-violet-500 m-2">
      <h1 className="text-2xl font-bold mb-4">Student Details Page</h1>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <img
          src={student.image}
          alt={`${student.firstName} ${student.lastName}`}
          className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
        />

        <h2 className="text-2xl mt-4 font-bold">
          {student.firstName} {student.lastName}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
          <p><strong>Program:</strong> {student.program}</p>
          <p><strong>Languages:</strong> {student.languages.join(", ")}</p>
          <p><strong>Background:</strong> {student.background}</p>
          <p><strong>Cohort:</strong> {student.cohort}</p>
        </div>

        {/* Optional: Add a back button */}
        <div className="mt-4">
          <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default StudentDetailsPage;
