import React from 'react'
import MainStudentPage from './screens/main-student-page'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Second from './screens/second-page'
import { LoginPage } from './screens/login-page'
import { RegisterPage } from './screens/register-page'
import StudentProfilePage from './screens/student-profile-page'



const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainStudentPage />} />
            <Route path="/courses" element={<Second />} />
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path='/profile' element={<StudentProfilePage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App