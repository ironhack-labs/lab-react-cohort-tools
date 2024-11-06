import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StudentDetailsPage from "../pages/StudentDetailsPage";
import UserProfilePage from "../pages/UserProfilePage";

function AppRoutes() {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/students/:studentId" element={<StudentDetailsPage />} />
            <Route path="/userProfile" element={<UserProfilePage />} />


        </Routes>
    )

}
export default AppRoutes