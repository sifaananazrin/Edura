import { useState } from "react";

import Sidenav from "../Pages/Teacher/Sidenav";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/TeacherLogin"
import Signup from "../Pages/Login/TeacherSignup";
import AddCourse from "../Pages/Teacher/Components/AddCourse";
import Home from "../Pages/Teacher/Components/Home";
import Shorts from "../Pages/Teacher/Components/Shorts";



function TeacherRouter() {
  

  return (

        <div>
   
            <Routes>
            <Route path="/home" element={<Home /> }/>
            <Route path="/shorts" element={<Shorts /> }/>
            <Route path="/" element={<Sidenav /> }/>
            <Route path="/login" element={<Login /> }/>
            <Route path="/signup" element={<Signup /> }/>
            <Route path="/addcourse" element={<AddCourse /> }/>
            
            
       
            
            </Routes>
        
        </div>

  );
}

export default TeacherRouter;
