// src/pages/HomePage.jsx
import StudentCard from "../components/StudentCard";

function HomePage() {
  const students = [
    { _id: '1', firstName: 'Student', lastName: 'One', email: 'one@example.com', phone: '123-456-7890', program: 'Full-Stack', image: null },
    { _id: '2', firstName: 'Student', lastName: 'Two', email: 'two@example.com', phone: '123-456-7890', program: 'Data Science', image: null },
    { _id: '3', firstName: 'Student', lastName: 'Three', email: 'three@example.com', phone: '123-456-7890', program: 'UX/UI', image: null },
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {students.map(student => (
          <StudentCard
            key={student._id}
            _id={student._id}
            firstName={student.firstName}
            lastName={student.lastName}
            email={student.email}
            phone={student.phone}
            program={student.program}
            image={student.image}
            className=""
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
