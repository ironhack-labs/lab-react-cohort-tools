import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import UserProfilePage from "../pages/UserProfilePage"
import StudentDetailsPage from "../pages/StudentDetailsPage"

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