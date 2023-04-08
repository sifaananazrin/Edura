import { useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Topbar from "../Pages/Admin/global/Topbar";
import Sidebar from "../Pages/Admin/global/Sidebar";
import Dashboard from "../Pages/Admin/dashboard";
import ManageUser from "../Pages/Admin/ManageUser";
import Course from "../Pages/Admin/Course";
import Category from "../Pages/Admin/Category";
import EditCategory from "../Pages/Admin/Category/EditCategory";
import Form from "../Pages/Admin/form";
import ApproveTeacher from "../Pages/Admin/ApproveTeacher";
import AddCategoryForm from "../Pages/Admin/Category/AddCategoryForm";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../Pages/Admin/theme";
import AdminLogin from "../Pages/Login/AdminLogin";

function AdminLayoutRouter() {
  const token = localStorage.getItem("token");
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
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function AdminRouter() {
  const token = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route
        path="/category"
        element={token ? <Category /> : <Navigate to="/admin/login" />}
      />
      <Route
        path="/editcategory"
        element={token ? <EditCategory /> : <Navigate to="/admin/login" />}
      />
      <Route
        path="/add-category"
        element={token ? <AddCategoryForm /> : <Navigate to="/admin/login" />}
      />
      <Route
        path="/home"
        element={token ? <Dashboard /> : <Navigate to="/admin/login" />}
      />
      <Route
        path="/manageuser"
        element={token ? <ManageUser /> : <Navigate to="/admin/login" />}
      />
      <Route path="/approveteacher" element={<ApproveTeacher />} />
      <Route
        path="/category"
        element={token ? <Course /> : <Navigate to="/admin/login" />}
      />
      <Route
        path="/form"
        element={token ? <Form /> : <Navigate to="/admin/login" />}
      />
    </Routes>
  );
}

export default AdminRouter;
