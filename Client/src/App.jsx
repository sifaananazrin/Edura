import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRouter from "./Route/AdminRouter";
import UserRouter from "./Route/UserRouter";
import Home from "./Pages/User/Login"


import TeacherRouter from "./Route/TeacherRouter"; 
import { BounceLoader } from "react-spinners";

function App() {


  return (
    <>
    
        <Router>
          <Routes>
         
          <Route path="/" element={<Home />} />
            <Route path="/admin/*" element={<AdminRouter />} />
            <Route path="/user/*" element={<UserRouter />} />
            <Route path="/teacher/*" element={<TeacherRouter />} />
            <Route path="*" element={<h1>404 Error: Page Not Found</h1>} />
          </Routes>
        </Router>
    
    </>
  );
}

export default App;
