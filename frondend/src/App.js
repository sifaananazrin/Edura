import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Login from "./pages/User/Login"
import Singup from './pages/User/Signup';
// import Signup from './Components/user/Signup'
// import TeacherSignup from './Components/Teacher/TeacherSignup'
// import TeacherLogin from './Components/Teacher/TeacherLogin'
import OTP from "./pages/User/OTP"
 import Welcomepage from "./pages/User/Welcome"

function App() {
  return (
    
     <Router>
      <Routes>
       <Route path="/" element={<Login/>}></Route>
       <Route path="/signup" element={ <Singup/>}></Route>
       <Route path="/OTP" element={ <OTP/>}></Route>
       
        {/* <Route path="/Teachersignup" element={ <TeacherSignup/>}></Route>
        <Route path="/Teacherlogin" element={ <TeacherLogin/>}></Route> */}
       {/* <Route path="/OTPPage" element={ <OTPPage/>}></Route> */}
        <Route path="/welcome" element={ <Welcomepage/>}></Route> 
      </Routes>
      </Router>
      
   
  )
}

export default App
