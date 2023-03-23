import { useState } from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import Topbar from "../Pages/Admin/global/Topbar";
import Sidebar from "../Pages/Admin/global/Sidebar";
import Dashboard from "../Pages/Admin/dashboard";
import ManageUser from '../Pages/Admin/ManageUser';
import Course from "../Pages/Admin/Course";
import ApproveTeacher from "../Pages/Admin/ApproveTeacher";


import Form from "../Pages/Admin/form";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../Pages/Admin/theme";

function AdminRouter() {
  const token=localStorage.getItem("token");
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
            <Route path="/home" element={ token ? <Dashboard /> :<Navigate to="/admin/login"/>}/>
            
              <Route path="/manageuser" element={ token ? <ManageUser /> : <Navigate to="/admin/login"/> } />
              <Route path="/approveteacher" element={<ApproveTeacher />}  />
              <Route path="/course" element={ token ?  <Course /> : <Navigate to="/admin/login"/>} />
              <Route path="/form" element={ token ?  <Form / >  : <Navigate to="/admin/login"/>} />
              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AdminRouter;
