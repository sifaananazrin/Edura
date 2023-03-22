

// import React, { useState } from "react";
// import {
//   Button,
//   Container,
//   Grid,
//   IconButton,
//   InputAdornment,
//   Paper,
//   TextField,
//   Box,
//   Link
// } from "@mui/material";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import LoginIcon from "@mui/icons-material/Login";
// import Avatar from "@mui/material/Avatar";
// import SchoolIcon from "@mui/icons-material/School";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const history = useNavigate();
//   const [inputs, setInputs] = useState({
//     // name:"",
//     email: "",
//     pass: "",
//     showPass: false,
//   });

//   const sendReguest = async (e) => {
//     try {
//       console.log(inputs);
//       const res = await axios.post("http://localhost:5000/api/login", {
//         email: inputs.email,
//         password: inputs.password,
//       });
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleChange = (e) => {
//     setInputs((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//     console.log(e.target.name, "value", e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//     sendReguest().then(() => history("/"));
//   };
//   const handlePassVisibility = () => {
//     setInputs({
//       ...inputs,
//       showPass: !inputs.showPass,
//     });
//   };

//   return (
//     <div>
      
    
//       {/* Content goes here */}

//       <Container maxWidth="sm">
//         <Grid
//           container
//           spacing={2}
//           direction="column"
//           justifyContent="center"
//           style={{ minHeight: "100vh" }}
//         >
//           <Box sx={{ maxWidth: 600, margin: "0 auto" }}>
//             <Paper
//               elevation={2}
//               sx={{ padding: 5, backgroundColor: "#673F86" }}
//             >
//               {/* Content goes here */}

//               <form onSubmit={handleSubmit}>
//                 <Grid
//                   container
//                   direction={"column"}
//                   spacing={2}
//                   style={{ color: "orange" }}
//                 >
//                   <Box
//                     display="flex"
//                     justifyContent="center"
//                     alignItems="center"
//                   >
//                     <Avatar
//                       style={{
//                         height: "100px",
//                         width: "100px",
//                         backgroundColor: "#ffff",
//                       }}
//                     >
//                       <SchoolIcon
//                         style={{
//                           fontSize: "5rem",
//                           color: "#673F86",
//                         }}
//                       />
//                     </Avatar>
//                   </Box>
//                   <Grid item style={{ color: "red" }}>
//                     <TextField
//                       name="email"
//                       type={"email"}
//                       value={inputs.email}
//                       onChange={handleChange}
//                       fullWidth
//                       label="enter your email"
//                       placeholder="Email Address"
//                       variant="outlined"
//                       inputProps={{
//                         style: {
//                           backgroundColor: "transparent",
//                           color: "#FF5F1F",
//                         },
//                       }}
//                       InputLabelProps={{
//                         style: { color: "#fff" },
//                       }}
//                     />
//                   </Grid>
//                   <Grid item>
//                     <TextField
//                       fullWidth
//                       type="password"
//                       name="password"
//                       value={inputs.password}
//                       onChange={handleChange}
//                       label="Password"
//                       placeholder="Password"
//                       variant="outlined"
//                       inputProps={{
//                         style: {
//                           backgroundColor: "transparent",
//                           color: "#fff",
//                         },
//                       }}
//                       InputLabelProps={{
//                         style: { color: "#fff" },
//                       }}
//                       InputProps={{
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <IconButton
//                               onClick={handlePassVisibility}
//                               edge="end"
//                             >
//                               {inputs.showPass ? (
//                                 <VisibilityOffIcon />
//                               ) : (
//                                 <VisibilityIcon />
//                               )}
//                             </IconButton>
//                           </InputAdornment>
//                         ),
//                         type: inputs.showPass ? "text" : "password",
//                       }}
//                     />
//                   </Grid>
                 
                
                  
//                   {/* '''''''''''''''''''''''''''''''''''''''''''''''''''''''' */}
                
//                   <Grid item>
//                     <div style={{ display: "flex", justifyContent: "center" }}>
//                       <Button
//                         type="submit"
//                         variant="contained"
//                         style={{
//                           backgroundColor: "#ffff",
//                           border: "2px solid #FF5F1F",
//                           color: "black",
//                         }}
//                         endIcon={<LoginIcon />}
//                       >
//                         Login
//                       </Button>
//                     </div>
//                   </Grid>
//                   <Link
//                     href="/Signup"
//                     style={{
//                       display: "block",
//                       textAlign: "center",
//                       color: "white",
//                     }}
//                   >
//                     Please Signup
//                   </Link>
//                 </Grid>
//               </form>
//             </Paper>
//           </Box>
//         </Grid>
//       </Container>
//     </div>
//   );
// }

// export default Login;

import React from "react";
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
    onSubmit: (values) => {
      // Your form submission logic here
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
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <FormControl>
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
  sx={{
    mt: 4,
    borderRadius: 10,
    bgcolor: "#673F86",
    color: '#fff',
    '&:hover': {
      bgcolor: "#1d1f33",
    },
  }}
  type='submit'
  fullWidth
  variant='contained'
>
  SignUp
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

