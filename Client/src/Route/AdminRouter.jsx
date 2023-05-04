import { useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Topbar from "../Pages/Admin/global/Topbar";
import Sidebar from "../Pages/Admin/global/Sidebar";
import Dashboard from "../Pages/Admin/dashboard/index";
import ManageUser from "../Pages/Admin/ManageUser";
import Category from "../Pages/Admin/Category";
import EditCategory from "../Pages/Admin/Category/EditCategory";
import Form from "../Pages/Admin/form";
import ApproveTeacher from "../Pages/Admin/ApproveTeacher";
import Cousers from "../Pages/Admin/Coures";
import AddCategoryForm from "../Pages/Admin/Category/AddCategoryForm";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../Pages/Admin/theme";
import AdminLogin from "../Pages/Authentication/AdminLogin";
import PrivateRoutes from "../Helpers/PrivateRoutes";

const AdminLayoutRoute=()=> {

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
 
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route element={<PrivateRoutes/>} >
      <Route element={<AdminLayoutRoute/>}>
      <Route
        path="/category"
        element={<Category />}
      />
      <Route
        path="/editcategory"
        element={ <EditCategory /> }
      />
      
      <Route
        path="/add-category"
        element={ <AddCategoryForm />}
      />
      <Route
        path="/home"
        element={ <Dashboard />}
      />
      <Route
        path="/manageuser"
        element={ <ManageUser /> }
      />
      <Route path="/approveteacher" element={<ApproveTeacher />} />
      <Route
        path="/form"
        element={<Form /> }
      />
       <Route
        path="/couser"
        element={<Cousers /> }
      />

   <Route path="*" element={<h1>404 Error: Page Not Found</h1>} />
      </Route>
      </Route>
    </Routes>
    
  );
}

export default AdminRouter;
