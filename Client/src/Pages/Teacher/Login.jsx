import React, { useState } from "react";
import { useFormik } from "formik";
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
import { ToastContainer, toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
 
  email: Yup.string().email("Invalid email address").required("Required"),

  password: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
})


const TeacherSignup = () => {
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
      //   qualification: "",
      
      password: "",
      
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(request.teacherlogin, values);
        console.log(response);
        if (response.data.message === "Login successful") {
          window.location = "/teacher/home";
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
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <FormControl component="form" onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Box
            padding={6}
            display={"flex"}
            justifyContent={"center"}
            flexDirection="column"
            width={400}
            margin="auto"
            alignContent={"center"}
            sx={{
              border: "1px solid #ccc",
              borderRadius: 10,
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              bgcolor: "#fff",
            }}
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
              sx={{
                mt: 4,
                borderRadius: 10,
                bgcolor: "blue",
                color: "#fff",
                "&:hover": {
                  bgcolor: "blue",
                },
              }}
              type="submit"
              fullWidth
              variant="contained"
            >
              Login
            </Button>
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              {"Don't have an account yet? "}
              <Link to="/teacher/signup">signup</Link>
            </p>
          </Box>
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default TeacherSignup;
