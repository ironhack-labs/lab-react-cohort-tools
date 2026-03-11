import { useParams, Link } from "react-router-dom";
import placeholderImage from "./../assets/placeholder.png";
import studentsData from "./../assets/students.json";

function StudentDetailsPage() {
  const params = useParams();

  const studentProfile = studentsData.find(
    (student) => student._id === params.studentId,
  );

  return (
    <div className="StudentDetailsPage">
      {studentProfile && (
        <>
          <img src={studentProfile.image || placeholderImage} />

          <h1>
            {studentProfile.firstName} {studentProfile.lastName}
          </h1>

          <p>Email: {studentProfile.email}</p>

          <p>Program: {studentProfile.program}</p>

          <Link to="/">
            <button>Back</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default StudentDetailsPage;
