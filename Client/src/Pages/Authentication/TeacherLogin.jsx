import React, { useState } from "react";
import { useFormik } from "formik";
import { boxStyles, buttonStyle, divstyle,paragraphStyle } from "./TeacherLoginStyle";
import * as Yup from "yup";
import {
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
  Box,
  Typography,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "../../api/axios"
import request from "../../api/request"
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
 
  email: Yup.string().email("Invalid email address").required("Required"),

  password: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
})


const TeacherLogin= () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
     
      email: "", 
      password: "",
      
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(request.teacherlogin, values);
        console.log(response);
        if (response.data.message === "Login successful") {
          localStorage.setItem("teachertoken",response.data.token)
          localStorage.setItem("tid",response.data.tid)
          localStorage.setItem("name",response.data.name)
          window.location = "/teacher/dashboard";
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred, please try again later.");
      }
    },
    
  });     
  return (
    <div
      style={divstyle}
    >
      <FormControl component="form" onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Box
          
            sx={boxStyles }
          >
            <Typography variant="h4" textAlign={"center"} sx={{ mb: 4 }}>
              Welcome Teacher...
            </Typography>
            

            <FormLabel sx={{ mt: 2 }}>Email</FormLabel>
            <TextField
              fullWidth
              margin="normal"
              variant="standard"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <FormLabel sx={{ mt: 2 }}>Password</FormLabel>
            <TextField
              fullWidth
              margin="normal"
              variant="standard"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

          

           

            <Button
              sx={buttonStyle}
              type="submit"
              fullWidth
              variant="contained"
            >
              Login
            </Button>
            <p style={paragraphStyle}>

             
           { "Don't have an account yet? "}
             <Link to="/teacher/signup">signup</Link>
            </p>
          </Box>
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default TeacherLogin;