import React from 'react'
import MainStudentPage from './screens/main-student-page'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Second from './screens/second-page'
import { LoginPage } from './screens/login-page'



const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainStudentPage />} />
            <Route path="/courses" element={<Second />} />
            <Route path="/login" element={<LoginPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App