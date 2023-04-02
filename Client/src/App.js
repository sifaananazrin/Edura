import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRouter from "../src/Route/AdminRouter";
import UserRouter from "../src/Route/UserRouter";

import AdminLogin from "./Pages/Login/AdminLogin";

import TeacherRouter from "./Route/TeacherRouter";
import { BounceLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <BounceLoader color={" #9a0eea"} loading={loading} size={150} />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="admin/login" element={<AdminLogin />} />
            <Route path="/admin/*" element={<AdminRouter />} />
            <Route path="/user/*" element={<UserRouter />} />
            <Route path="/teacher/*" element={<TeacherRouter />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
