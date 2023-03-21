import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";// import Layout from "./components/Layout";

// import HomeScreen from "./Screens/User/HomeScreen";
import UserRouter from "./Route/UserRouter";
// import CourseDetailsScreen from "./Screens/User/CourseDetailsScreen";
// import FeaturedCoursesScreen from "./Screens/User/FeaturedCoursesScreen";
// import Login from "./Screens/User/Login";
import AdminRouter from '../src/Route/AdminRouter'


// import Signup from "./Screens/User/Signup";
// import OTP from "./Screens/User/OTP";
// import { ThemeProvider } from '@mui/material'
// import theme from './theme'
// import CssBaseline from '@mui/material/CssBaseline'
//admin
// import Adminlogin from './Screens/Admin/Adminlogin'

const App = () => {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" exact element={<HomeScreen />} /> */}
         

          {/* <Route path="/user/login" element={<Login />} /> */}
          <Route
            path="/user/*"
            element={ <UserRouter />}
          />
          <Route
            path="/admin/*"
            element={ <AdminRouter/>}
          />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
