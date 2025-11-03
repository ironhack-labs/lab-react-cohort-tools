import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Cohort Students</h2>
      <ul className="space-y-3">
        {students.map((student) => (
          <li key={student._id} className="border p-3 rounded">
            <Link
              to={`/students/${student._id}`}
              className="text-blue-600 hover:underline"
            >
              {student.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
