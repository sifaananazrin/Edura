import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRouter from "../src/Route/AdminRouter";
import UserRouter from "../src/Route/UserRouter"
// import AdminLogin from '../Pages/Admin/Login/AdminLogin';
import AdminLogin from "./Pages/Login/AdminLogin";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="admin/login" element={<AdminLogin />} />
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/user/*" element={<UserRouter />} />
      </Routes>
    </Router>
  );
}

export default App;
