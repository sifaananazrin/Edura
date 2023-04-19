import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRouter from "./Route/AdminRouter";
import UserRouter from "./Route/UserRouter";



import TeacherRouter from "./Route/TeacherRouter"; 
import { BounceLoader } from "react-spinners";

function App() {


  return (
    <>
    
        <Router>
          <Routes>
         
       
            <Route path="/admin/*" element={<AdminRouter />} />
            <Route path="/user/*" element={<UserRouter />} />
            <Route path="/teacher/*" element={<TeacherRouter />} />
          </Routes>
        </Router>
    
    </>
  );
}

export default App;
