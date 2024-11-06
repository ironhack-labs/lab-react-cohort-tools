import HomePage from "../pages/HomePage";
import StudentDetailsPage from "../pages/StudentDetailsPage";
import UserProfilePage from "../pages/UserProfilePage";

import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {

    return (
        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path="/students/:studentId" element={<StudentDetailsPage />} />
            <Route path="/profile" element={<UserProfilePage />} />

        </Routes>
    )
}
export default AppRoutes