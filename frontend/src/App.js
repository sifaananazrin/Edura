import {Route,Routes} from "react-router-dom"

import React from 'react'
import Login from './Components/user/Login'
import Signup from './Components/user/Signup'
import TeacherSignup from './Components/Teacher/TeacherSignup'
import TeacherLogin from './Components/Teacher/TeacherLogin'
import OTPPage from "./Components/user/OTPPage"
import Welcomepage from "./Components/user/Welcomepage"

function App() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={ <Login/>}></Route>
        <Route path="/signup" element={ <Signup/>}></Route>
        <Route path="/Teachersignup" element={ <TeacherSignup/>}></Route>
        <Route path="/Teacherlogin" element={ <TeacherLogin/>}></Route>
        <Route path="/OTPPage" element={ <OTPPage/>}></Route>
        <Route path="/welcome" element={ <Welcomepage/>}></Route>
      </Routes>
    
      
    </div>
  )
}

export default App



