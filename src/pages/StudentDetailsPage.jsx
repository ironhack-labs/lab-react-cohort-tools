import { Link, useParams } from "react-router-dom";
import studentsData from "../assets/students.json";

function StudentDetailsPage() {
  const { studentId } = useParams();

  const foundStudent = studentsData.find((student) => {
    return student._id === studentId;
  });

  return (
    <div className="StudentDetailsPage bg-gray-100 py-6 px-4 border-2 border-cyan-500 m-2">
      <h1>Student Details Page</h1>

      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        {foundStudent && (
          <>
            <img
              src={foundStudent.image}
              alt="profile-photo"
              className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
            />

            <h1 className="text-2xl mt-4 font-bold absolute">
              {foundStudent.firstName} {foundStudent.lastName}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 mb-4 border-b pb-4">
              <p className="text-left mb-2 pb-2">
                <strong>LinkedIn:</strong>{" "}
                <a
                  href={foundStudent.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  {foundStudent.linkedinUrl}
                </a>
              </p>

              <p className="text-left mb-2 pb-2">
                <strong>Email:</strong> {foundStudent.email}
              </p>

              <p className="text-left mb-2 pb-2">
                <strong>Languages:</strong> {foundStudent.languages.join(", ")}
              </p>

              <p className="text-left mb-2 pb-2">
                <strong>Program:</strong> {foundStudent.program}
              </p>

              <p className="text-left mb-2 pb-2">
                <strong>Background:</strong> {foundStudent.background}
              </p>

              <p className="text-left mb-2 pb-2">
                <strong>Cohort:</strong> {foundStudent.cohort}
              </p>
            </div>
          </>
        )}

        <Link to="/">
          <button className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default StudentDetailsPage;