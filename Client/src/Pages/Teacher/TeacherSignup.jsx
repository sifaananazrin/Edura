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
import axios from "../../api/axios";
import requests from "../../api/request";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),

  password: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  cPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

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
      name: "",
      email: "",
      //   qualification: "",
      qualification: "",
      password: "",
      cPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(requests.teachersignup, values);
        console.log(response);
        if (response.status === 201) {
          window.location = "/teacher/login";
        } 
      } catch (error) {
        console.error(error);
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
            <FormLabel sx={{ mt: 2 }}>Name</FormLabel>
            <TextField
              fullWidth
              margin="normal"
              variant="standard"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

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

            <TextField
              id="qualification"
              name="qualification"
              label="Qualification"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoComplete="qualification"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.qualification}
              error={
                formik.touched.qualification &&
                Boolean(formik.errors.qualification)
              }
              helperText={
                formik.touched.qualification && formik.errors.qualification
              }
            />

            <FormLabel sx={{ mt: 2 }}>Confirm Password</FormLabel>
            <TextField
              fullWidth
              margin="normal"
              variant="standard"
              name="cPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formik.values.cPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.cPassword && Boolean(formik.errors.cPassword)
              }
              helperText={formik.touched.cPassword && formik.errors.cPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              sx={{
                mt: 4,
                borderRadius: 10,
                bgcolor: "red",
                color: "#fff",
                "&:hover": {
                  bgcolor: "red",
                },
              }}
              type="submit"
              fullWidth
              variant="contained"
            >
              SignUp
            </Button>
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              {"Don't have an account yet? "}
              <Link to="/teacher/login">Login</Link>
            </p>
          </Box>
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default TeacherSignup;
