import { Link } from "react-router-dom";

const students = [
  {
    id: 1,
    name: "Juan Pérez",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "María González",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const HomePage = () => {
  return (
    <div>
      <h1>Lista de Estudiantes</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <img
              src={student.image}
              alt={student.name}
              style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }}
            />
            <Link to={`/students/${student.id}`} style={{ textDecoration: "none", color: "black" }}>
              {student.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
