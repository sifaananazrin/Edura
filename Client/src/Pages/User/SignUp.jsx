import React, { useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/request";
import { useFormik } from "formik";
import * as Yup from "yup";
// import Spinner from "../../../src/component/Spinner"
import { useNavigate } from "react-router-dom";
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

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number. Please enter a 10-digit number.")
    .required("Required"),
  password: Yup.string().required("Required"),
  cPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

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
      phone: "",
      password: "",
      cPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await axios.post(requests.Signup, values);
        console.log(response);
        if (response.data.user) {
          navigate("/user/login");
        } else if (response.data.email) {
          navigate("/user/otp");
        }
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.log("Response Data:", error.response.data);
        }
      } finally {
        setLoading(false);
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
        backgroundColor: "#f4f4f4",
      }}
    >
      <FormControl component="form" onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Box
            padding={4}
            width={400}
            margin="auto"
            borderRadius={10}
            boxShadow="0 2px 4px rgba(0,0,0,0.2)"
            bgcolor="#fff"
          >
            <Typography variant="h4" textAlign="center" sx={{ mb: 4 }}>
              Sign up
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
            <FormLabel sx={{ mt: 2 }}>phone</FormLabel>
            <TextField
              fullWidth
              margin="normal"
              variant="standard"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
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

            {/* {loading && <Spinner />} Display the Spinner when loading is true */}

            <Button
              sx={{
                mt: 4,
                borderRadius: 10,
                bgcolor: "#673F86",
                color: "#fff",
                "&:hover": {
                  bgcolor: "#1d1f33",
                },
              }}
              type="submit"
              fullWidth
              variant="contained"
            >
              SIGN UP
            </Button>
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              {"Don't have an account yet? "}
              <Link to="/user/login">Login</Link>
            </p>
          </Box>
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default SignUp;
