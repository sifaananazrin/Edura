import React from 'react'
import { Route, Routes } from "react-router-dom";
import SignUp from '../Pages/User/SignUp'
import Login from '../Pages/User/Login';
import OTP from "../Pages/User/OTP";
import CourseDetailsScreen from "../Pages/User/CourseDetailsScreen";
import FeaturedCoursesScreen from "../Pages/User/FeaturedCoursesScreen";
import HomeScreen from "../Pages/User/HomeScreen";
import Layout from "../Pages/User/components/Layout";
import { ThemeProvider } from '@mui/material'
 import theme from '../Pages/User/theme'
 import CssBaseline from '@mui/material/CssBaseline'

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