import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRouter from "../src/Route/AdminRouter";
import UserRouter from "../src/Route/UserRouter"
// import AdminLogin from '../Pages/Admin/Login/AdminLogin';
import AdminLogin from "./Pages/Login/AdminLogin";
// import Login from "./Pages/User/Login";
import TeacherRouter from "./Route/TeacherRouter"


function App() {
  return (
    <Router>
      <Routes>
      <Route path="admin/login" element={<AdminLogin />} />
      {/* <Route path="teacher/login" element={<Login />} />  */}
      {/* <Route path="teacher/signup" element={<TeacherSignup />} /> */}
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/user/*" element={<UserRouter />} />
        <Route path="/teacher/*" element={<TeacherRouter />} />
      </Routes>
    </Router>
  );
}

export default App;
