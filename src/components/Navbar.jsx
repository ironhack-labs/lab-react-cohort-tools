import { Link, useParams } from "react-router-dom";
import logo from "./../assets/logo-ironhack-blue.png";

export function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between h-20 items-center px-4">
        <div className="flex items-center space-x-2 w-1/4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8 w-auto hover:opacity-80 transition" />
          </Link>
        </div>

        <div className="flex justify-center w-1/2">
          <span className="text-xl font-bold">Cohort Tools</span>
        </div>

        <div className="w-1/4 flex justify-end mr-4">
          <Link to="/profile">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-1.png"
              alt="User Profile"
              className="h-10 w-auto border border-white rounded-3xl p-1 hover:bg-blue-500 transition"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function HomePage({ students }) {
  return (
    <div className="p-8 mt-20">
      <h1 className="text-2xl font-bold mb-6">Student List</h1>
      <div className="flex flex-col gap-2">
        {students && students.map((student) => (
          <Link 
            key={student._id} 
            to={`/students/${student._id}`}
            className="flex items-center border-b pb-2 hover:bg-gray-50 transition p-2"
          >
            <img src={student.image} alt="student" className="h-10 w-10 rounded-full mr-4" />
            <span className="text-blue-600 font-medium">
              {student.firstName} {student.lastName}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function StudentDetailsPage() {
  const { studentId } = useParams();
  return (
    <div className="p-8 mt-20">
      <h1 className="text-2xl font-bold">Student Details</h1>
      <p className="mt-2 text-gray-500">ID: {studentId}</p>
      <div className="mt-8">
        <Link to="/">
          <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export function UserProfilePage() {
  return (
    <div className="p-8 mt-20">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="mt-8">
        <Link to="/">
          <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}