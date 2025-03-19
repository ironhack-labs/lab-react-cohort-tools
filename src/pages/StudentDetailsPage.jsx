import { useParams, Link } from "react-router-dom";

const students = [
  {
    id: 1,
    name: "Juan Pérez",
    details: "Estudiante de React",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "María González",
    details: "Estudiante de JavaScript",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    details: "Estudiante de Node.js",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const StudentDetailsPage = () => {
  const { studentId } = useParams();
  const student = students.find((s) => s.id === Number(studentId));

  if (!student) {
    return <h2>Estudiante no encontrado</h2>;
  }

  return (
    <div>
      <h1>{student.name}</h1>
      <img src={student.image} alt={student.name} style={{ width: "150px", borderRadius: "10px" }} />
      <p>{student.details}</p>
      <Link to="/">⬅️ Volver a la lista</Link>
    </div>
  );
};

export default StudentDetailsPage;
