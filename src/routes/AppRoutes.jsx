import { Route, Routes } from "react-router-dom"
import StudentDetailsPage from "../pages/StudentDetailsPage"
import HomePage from "../pages/HomePage"
import UserProfilePage from "../pages/UserProfilePage"

const AppRoutes = () => {

    return (
        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/student-details/:studentId' element={<StudentDetailsPage />} />
            <Route path='/user-profile' element={<UserProfilePage />} />

        </Routes>
    )
}

export default AppRoutes