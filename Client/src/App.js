import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRouter from "../src/Route/AdminRouter";
import UserRouter from "../src/Route/UserRouter"
import { Backdrop, CircularProgress } from '@material-ui/core';
import TeacherRouter from "../src/Route/TeacherRouter"

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, []);

  return (
    <Router>
      <Routes>

        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/user/*" element={<UserRouter />} />
        <Route path="/teacher/*" element={<TeacherRouter />} />
      </Routes>

      <Backdrop open={loading} style={{ zIndex: 1 }}>
        <CircularProgress color="secondary" size={80} />
      </Backdrop>
    </Router>
  );
}

export default App;
