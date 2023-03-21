import React from 'react'
import { Route, Routes } from "react-router-dom";

import AdminLogin from '../Screens/Admin/Login/AdminLogin';
import Sidebar from '../Screens/Admin/Sidebar';

function UserRouter() {
    return (
      
       
         
            <Routes>
              <Route path="/home" element={< Sidebar/>} />
              <Route path="/login" element={<AdminLogin />} />
             
            </Routes>
          

        
      );
}

export default UserRouter