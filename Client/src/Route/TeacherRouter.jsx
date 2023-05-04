import React from 'react';
import { Routes, Route ,Navigate} from 'react-router-dom';
import ButtonAppBar from '../Pages/Teacher/component/navbar/navbar';
import Dashboard from '../Pages/Teacher/component/dashboard/DashboardCard';
import Course from '../Pages/Teacher/component/course/Course.js';
import CourseForm from '../Pages/Teacher/component/course/CourseForm.js';
import EditCourse from '../Pages/Teacher/component/course/EditCourse.js';
import  Login from '../Pages/Authentication/TeacherLogin';
import TeacherSignup  from '../Pages/Authentication/TeacherSignup';
import ViewStudent from '../Pages/Teacher/component/Student/ViewStudent';
import PrivateRoutes from '../Helpers/PrivateRoutesTeacher';

function TeacherRouter() {
  const token=localStorage.getItem("teachertoken");
  return (
    <>
   {token && <ButtonAppBar />}
    <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<TeacherSignup />} />
  
  <Route element={<PrivateRoutes/>} >
    <Route path="/student" element={<ViewStudent />} />
    <Route path="/dashboard" element={ <Dashboard /> } />
    <Route path="/course" element={ <Course />} />
    <Route path="/create-course" element={<CourseForm /> } />
    <Route path="/edit-course" element={ <EditCourse /> } />
    <Route path="*" element={<h1>404 Error: Page Not Found</h1>} />
  </Route>
</Routes>

    </>
  );
}

export default TeacherRouter;
