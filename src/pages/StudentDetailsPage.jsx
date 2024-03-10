import placeholderImage from "./../assets/placeholder.png";
import studentsData from "./../assets/students.json";
import { useParams } from "react-router";

function StudentDetailsPage() {
  // Find the current student profile by id.
  // In this case, the student with id 1. The `studentId` is hard-coded for now.
  // This could be a URL parameter from React Router, e.g. /students/:studentId

  const { pizzaId } = useParams();
  const studentProfile = studentsData.find(
    (student) => student._id === pizzaId
  );

  return (
    <div className="student-details-container">
    <h1>Student Details Page</h1>
    <div className="profile-section">
      {studentProfile && (
        <>
          <img
            src={studentProfile.image || placeholderImage}
            alt="Profile"
            className="profile-photo"
          />
          <h1 className="profile-name">
            {studentProfile.firstName} {studentProfile.lastName}
          </h1>
          <div className="profile-details">
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href={studentProfile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                {studentProfile.linkedinUrl}
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <span>{studentProfile.email}</span>
            </p>
            <p>
              <strong>Languages:</strong>{" "}
              {studentProfile.languages.join(", ")}
            </p>
            <p>
              <strong>Program:</strong> {studentProfile.program}
            </p>
            <p>
              <strong>Background:</strong> {studentProfile.background}
            </p>
            <p>
              <strong>Cohort:</strong> {studentProfile.cohort}
            </p>
          </div>
          <button className="back-button">Back</button>
        </>
      )}
    </div>
  </div>
  );
}

export default StudentDetailsPage;


///

