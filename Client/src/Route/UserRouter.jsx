import React from 'react'
import { Route, Routes ,Navigate} from "react-router-dom";
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
 import Profile from '../Pages/User/components/Profile/ProfilePage.js';
 import Payment from '../Pages/User/components/Payment/Payment';
 import OrderViewPage from '../Pages/User/components/Oder/OrderViewPage';
 import SuccessPage from '../Pages/User/components/Success/SuccessPage';
 import PrivateRoutes from '../Helpers/PrivateRoutesUser';
 

function UserRouter() {

  const token=localStorage.getItem("usertoken");
    return (
      
         <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Routes>
            <Route path="/login" element={!token ? <Login /> : <Navigate to="/user/home"/>} /> 
            <Route path="/otp" element={<OTP/>}></Route>
              <Route path="/signup" element={<SignUp /> } />

              <Route element={<PrivateRoutes/>} >
              <Route path="/payment" element={<Payment /> } />
              <Route path="/success" element={< SuccessPage/>}/>
              <Route path="/oders" element={< OrderViewPage/>}></Route>
              
              <Route path="/profile" element={<Profile/>}></Route>
               
              <Route path="/home" element={ <HomeScreen /> } />
              <Route path={"/course-details"} element={  <CourseDetailsScreen />}  />
              <Route
                path={"/currently-featured"}
                element={ <FeaturedCoursesScreen />}
              />
              </Route>
            </Routes>
          </Layout>
          </ThemeProvider>

        
      );
}

export default UserRouter