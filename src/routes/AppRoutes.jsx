import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StudentDetailsPage from "../pages/StudentDetailsPage";
import UserProfilePage from "../pages/UserProfilePage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/students/:studentId" element={<StudentDetailsPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
        </Routes>
    )
}

export default AppRoutes