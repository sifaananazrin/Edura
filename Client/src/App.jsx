import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import AdminRouter from "./Route/AdminRouter";
import UserRouter from "./Route/UserRouter";
import Home from "./Pages/User/Login"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./component/NotFound";
import TeacherRouter from "./Route/TeacherRouter"; 
import { BounceLoader } from "react-spinners";
import Exam from "./Route/ExamRouter"

function App() {

  const Usertoken=localStorage.getItem("usertoken");
  return (
    <>
    
        <Router>
        <ToastContainer />
          <Routes>
          
          <Route path="/" element={ !Usertoken ? <Home /> :<Navigate to="/user/home"/>} />
            <Route path="/admin/*" element={<AdminRouter />} />
            <Route path="/user/*" element={<UserRouter />} />
            <Route path="/teacher/*" element={<TeacherRouter />} />
            <Route path="/exam/*" element={<Exam />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Router>
    
    </>
  );
}

export default App;
