import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Login from "./pages/User/Login"
import Singup from './pages/User/Signup';

 import TeacherSignup from './pages/Teacher/TeacherSignup'
 import TeacherLogin from './pages/Teacher/TeacherLogin'
import OTP from "./pages/User/OTP"
 import Welcomepage from "./pages/User/Welcome"

function App() {
  return (
    
     <Router>
      <Routes>
       <Route path="/" element={<Login/>}></Route>
       <Route path="/signup" element={ <Singup/>}></Route>
       <Route path="/OTP" element={ <OTP/>}></Route>
       
        <Route path="/Teachersignup" element={ <TeacherSignup/>}></Route>
        <Route path="/Teacherlogin" element={ <TeacherLogin/>}></Route> 
       
        <Route path="/welcome" element={ <Welcomepage/>}></Route> 
      </Routes>
      </Router>
      
   
  )
}

export default App
