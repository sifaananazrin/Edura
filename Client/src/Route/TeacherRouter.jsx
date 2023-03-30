
import React from 'react'
import { Route, Routes } from "react-router-dom";
import TeacherSignup from "../Pages/Teacher/TeacherSignup";
 import TeacherSidebar from "../Pages/Teacher/TeacherSidebar"
 import  Login  from  '../Pages/Teacher/Login';
//  import AddCourseTable from '../Pages/Teacher/AddCourseFrom';


function TeacherRouter() {
  return (
    <div>
      <Routes>
     
   <Route path="/signup" element={<TeacherSignup />} />
    <Route path="/home" element={<TeacherSidebar />} />
    <Route path="/login" element={<Login />} />
  </Routes>
    </div>
  )
}

export default TeacherRouter