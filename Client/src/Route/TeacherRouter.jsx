import React from 'react';
import { Routes, Route ,Navigate} from 'react-router-dom';
import ButtonAppBar from '../Pages/Teacher/component/navbar/navbar';
import Dashboard from '../Pages/Teacher/component/dashboard/Dashboard.js';
import Course from '../Pages/Teacher/component/course/Course.js';
import CourseForm from '../Pages/Teacher/component/course/CourseForm.js';
import EditCourse from '../Pages/Teacher/component/course/EditCourse.js';
import  Login from '../Pages/Login/TeacherLogin';
import TeacherSignup  from '../Pages/Login/TeacherSignup';
import ViewStudent from '../Pages/Teacher/component/Student/ViewStudent';


function TeacherRouter() {
  const token=localStorage.getItem("teachertoken");
  return (
    <>
      <ButtonAppBar />
      <Routes>
      <Route path="/student" element={token ? <ViewStudent />:<Navigate to="/teacher/login"/>} />
      <Route path="/signup" element={ <TeacherSignup />  }/>
      <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={token ? <Dashboard />:<Navigate to="/teacher/login"/> }/>
        <Route path="/course" element={token ? <Course /> :<Navigate to="/teacher/login"/>} />
        <Route path="/create-course" element={token ? <CourseForm />:<Navigate to="/teacher/login"/> }/>
        <Route path="/edit-course" element={token ? <EditCourse /> :<Navigate to="/teacher/login"/>}/>
      </Routes>
    </>
  );
}

export default TeacherRouter;
