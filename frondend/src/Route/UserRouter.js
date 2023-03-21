import React from 'react'
import { Route, Routes } from "react-router-dom";
import SignUp from '../Screens/User/SignUp'
import OTP from "../Screens/User/OTP";
import CourseDetailsScreen from "../Screens/User/CourseDetailsScreen";
import FeaturedCoursesScreen from "../Screens/User/FeaturedCoursesScreen";
import HomeScreen from "../Screens/User/HomeScreen";
import Layout from "../components/Layout";
import { ThemeProvider } from '@mui/material'
 import theme from '../UserTheme'
 import CssBaseline from '@mui/material/CssBaseline'
 import Login from '../Screens/User/Login';
function UserRouter() {
    return (
      
         <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Routes>
              <Route path="/Signup" element={<SignUp />} />
              <Route path="/otp" element={<OTP/>}></Route>
               <Route path="/login" element={<Login />} /> 
              <Route path="/home" element={<HomeScreen />} />
              <Route path={"/course-details"} element={<CourseDetailsScreen />} />
              <Route
                path={"/currently-featured"}
                element={<FeaturedCoursesScreen />}
              />
            </Routes>
          </Layout>
          </ThemeProvider>

        
      );
}

export default UserRouter