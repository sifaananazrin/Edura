
import {
  formStyles,
  formControlStyles,
  buttonStyles,
  labelStyles,
} from "./LoginStyle";
import React from "react";
import axios from "../../api/axios";
import request from "../../api/request"
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  InputAdornment,
  TextField,
  Typography,
  IconButton
} from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";


const labelStyle = { mt: 1, mb: 1 };

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(request.login, values);
        if (response.data.message === "Login successful") {
          window.location = "/user/home";
          localStorage.setItem("usertoken",response.data.token)
          localStorage.setItem("user",response.data.name)
          localStorage.setItem("email",response.data.email)
          localStorage.setItem("uid",response.data.uid)
        } else {
          toast.error(response.data.message);
        }
        
      } catch (error) {
        console.error(error);
        toast.error("An error occurred, please try again later.");
      }
    },
    
    
    
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (

    <div
      style={formStyles}
    >
       {/* <ToastContainer /> */}
      <FormControl  sx={formControlStyles}  component="form" onSubmit={formik.handleSubmit}>
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
              Login
            </Typography>
            <FormLabel sx={labelStyle}>Email</FormLabel>
            <TextField
              margin="normal"
              variant="standard"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {formik.touched.email &&
                      !formik.errors.email &&
                      showPassword && <Visibility />}
                    {formik.touched.email &&
                      !formik.errors.email &&
                      !showPassword && <VisibilityOff />}
                  </InputAdornment>
                ),
              }}
              sx={{ bgcolor: "#f9f9f9" }}
            />
            <FormLabel sx={labelStyle}>Password</FormLabel>
            <TextField
              margin="normal"
              variant="standard"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={
                formik.touched.password && Boolean(formik.errors.password)
              }
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
  sx={buttonStyles}
  type='submit'
  fullWidth
  variant='contained'
>
  Sign In
</Button>
<p style={{ textAlign: 'center', marginTop: '10px' }}>
  {"Don't have an account yet? "}
  <Link to="/user/signup">SignUp</Link>
</p>
          </Box>
          </FormGroup>
          </FormControl>
          </div>
          
  )
          }

          export default Login

