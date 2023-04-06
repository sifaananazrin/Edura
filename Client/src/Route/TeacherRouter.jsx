import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ButtonAppBar from '../Pages/Teacher/component/navbar/navbar';
import Dashboard from '../Pages/Teacher/component/dashboard/Dashboard.js';
import Course from '../Pages/Teacher/component/course/Course.js';
import CourseForm from '../Pages/Teacher/component/course/CourseForm.js';
import EditCourse from '../Pages/Teacher/component/course/EditCourse.js';
import  Login from '../Pages/Login/TeacherLogin';
import TeacherSignup  from '../Pages/Login/TeacherSignup';
import SuccessPage from '../Pages/User/components/Success/SuccessPage';

function TeacherRouter() {
  return (
    <>
      <ButtonAppBar />
      <Routes>
      <Route path="/success" element={< SuccessPage />} />
      <Route path="/signup" element={<TeacherSignup />} />
      <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course" element={<Course />} />
        <Route path="/create-course" element={<CourseForm />} />
        <Route path="/edit-course" element={<EditCourse />} />
      </Routes>
    </>
  );
}

export default TeacherRouter;
