import { Link, useParams } from "react-router-dom";
import placeholderImage from "./../assets/placeholder.png";
import studentsData from "./../assets/students.json";

function StudentDetailsPage() {
  // Expect a route like: <Route path="/students/:studentId" element={<StudentDetailsPage />} />
  const { studentId } = useParams();

  // Ensure we compare like-for-like in case _id is numeric in JSON
  const studentProfile = studentsData.find(
    (student) => String(student._id) === String(studentId)
  );

  return (
    <div className="StudentDetailsPage bg-gray-100 py-6 px-4 border-2 border-fuchsia-500 m-2">
      <h1>Student Details Page</h1>

      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        {!studentProfile ? (
          <>
            <p className="mb-6">
              No student found for id "<span className="font-mono">{studentId}</span>".
            </p>
            <Link
              to="/"
              className="inline-block text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out"
            >
              ← Back
            </Link>
          </>
        ) : (
          <>
            <img
              src={studentProfile.image || placeholderImage}
              alt="profile-photo"
              className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
            />

            <h1 className="text-2xl mt-4 font-bold absolute">
              {studentProfile.firstName} {studentProfile.lastName}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 mb-4 border-b pb-4">
              <p className="text-left mb-2 border-b pb-2">
                <strong>LinkedIn:</strong>{" "}
                {studentProfile.linkedinUrl ? (
                  <a
                    href={studentProfile.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 text-blue-500 hover:underline break-all"
                  >
                    {studentProfile.linkedinUrl}
                  </a>
                ) : (
                  <span className="ml-2 text-gray-500">N/A</span>
                )}
              </p>

              <p className="text-left mb-2 border-b pb-2">
                <strong>Email:</strong>{" "}
                <span className="ml-2 text-blue-500 hover:underline break-all">
                  {studentProfile.email || "N/A"}
                </span>
              </p>

              <p className="text-left mb-2 border-b pb-2">
                <strong>Languages:</strong>{" "}
                {Array.isArray(studentProfile.languages) && studentProfile.languages.length
                  ? studentProfile.languages.join(", ")
                  : "N/A"}
              </p>

              <p className="text-left mb-2 border-b pb-2">
                <strong>Program:</strong> {studentProfile.program || "N/A"}
              </p>

              <p className="text-left mb-2 pb-2">
                <strong>Background:</strong> {studentProfile.background || "N/A"}
              </p>

              <p className="text-left mb-2 pb-2">
                <strong>Cohort:</strong>
                <span className="ml-2 text-blue-500 hover:underline">
                  {studentProfile.cohort || "N/A"}
                </span>
              </p>
            </div>

            {/* Back button */}
            <Link
              to="/"
              className="inline-block text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out"
            >
              ← Back
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default StudentDetailsPage;
