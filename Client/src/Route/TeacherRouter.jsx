
import React from 'react'
import { Route, Routes } from "react-router-dom";
import TeacherSignup from "../Pages/Teacher/TeacherSignup";
 import TeacherSidebar from "../Pages/Teacher/TeacherSidebar"
 import  Login  from  '../Pages/Teacher/Login';
//  import AddCourseTable from '../Pages/Teacher/AddCourseFrom';
 import AddCourseForm from '../Pages/Teacher/AddCourseFrom';
 import AddCategoryForm from '../Pages/Admin/Category/AddCategoryForm';
 import ViewCoursesTable from "../Pages/Teacher/ViewCoursesTable"

function TeacherRouter() {
  return (
    <div>
      <Routes>
      <Route path="/course" element={<AddCourseForm />} />
      <Route path="/add-course" element={<ViewCoursesTable />} />
   <Route path="/signup" element={<TeacherSignup />} />
    <Route path="/home" element={<TeacherSidebar />} />
    <Route path="/login" element={<Login />} />
  </Routes>
    </div>
  )
}

export default TeacherRouter