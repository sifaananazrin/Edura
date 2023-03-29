
import React from 'react'
import { Route, Routes } from "react-router-dom";
import TeacherSignup from "../Pages/Teacher/TeacherSignup";
 import Sidebar from "../Pages/Teacher/sidebar"
 import  Login  from  '../Pages/Teacher/Login';
 import AddCourseTable from '../Pages/Teacher/AddCourseFrom';

function TeacherRouter() {
  return (
    <div>
      <Routes>
 
      <Route path="/add-course" element={<AddCourseTable />} />
   <Route path="/signup" element={<TeacherSignup />} />
    <Route path="/home" element={<Sidebar />} />
    <Route path="/login" element={<Login />} />
  </Routes>
    </div>
  )
}

export default TeacherRouter