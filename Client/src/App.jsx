import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRouter from "./Route/AdminRouter";
import UserRouter from "./Route/UserRouter";
import Home from "./Pages/User/Login"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./component/NotFound";
import TeacherRouter from "./Route/TeacherRouter"; 
import { BounceLoader } from "react-spinners";

function App() {


  return (
    <>
    
        <Router>
        <ToastContainer />
          <Routes>
          
          <Route path="/" element={<Home />} />
            <Route path="/admin/*" element={<AdminRouter />} />
            <Route path="/user/*" element={<UserRouter />} />
            <Route path="/teacher/*" element={<TeacherRouter />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Router>
    
    </>
  );
}

export default App;
