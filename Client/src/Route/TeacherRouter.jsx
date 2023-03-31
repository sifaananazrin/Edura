import { useState } from "react";

import Sidenav from "../Pages/Teacher/Sidenav";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/TeacherLogin"
import Signup from "../Pages/Login/TeacherSignup";
import AddCourse from "../Pages/Teacher/Components/AddCourse";



function TeacherRouter() {
  

  return (

        <div>
   
            <Routes>
            <Route path="/home" element={<Sidenav /> }/>
            <Route path="/login" element={<Login /> }/>
            <Route path="/signup" element={<Signup /> }/>
            <Route path="/addcourse" element={<AddCourse /> }/>
            
            
       
            
            </Routes>
        
        </div>

  );
}

export default TeacherRouter;
