import { Link } from "react-router-dom";

const UserProfilePage = () => {
  return (
    <div>
      <h1>Perfil del Usuario</h1>
      <p>Este es el perfil del usuario.</p>
      <Link to="/">⬅️ Volver a la página principal</Link>
    </div>
  );
};

export default UserProfilePage;
