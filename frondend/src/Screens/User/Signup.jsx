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

// function Signup() {
//   const history = useNavigate();
//   const [inputs, setInputs] = useState({
//     name: "",
//     email: "",
//     pass: "",
//     showPass: false,
//   });

//   const sendReguest = async (e) => {
//     try {
//       console.log(inputs);
//       const res = await axios.post("http://localhost:5000/api/signup", {
//         name: inputs.name,
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
//     // Perform validation on the form data here
//     // console.log(inputs);
//     // Send the form data to the server here using AJAX or navigate to a new page

//     sendReguest().then(() => history("/otp"));
//   };
//   const handlePassVisibility = () => {
//     setInputs({
//       ...inputs,
//       showPass: !inputs.showPass,
//     });
//   };

//   return (
//     <div
//       style={{
//         // backgroundImage:
//         //   "url(https://cdndatastatic.myclassboard.com/Live_Classes/Assets/img/hero/heroimage.svg)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         backgroundAttachment: "fixed",
//         height: "100vh",
//         margin: 0,
//         padding: 0,
//       }}
//     >
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
//                   style={{ color: "#fff" }}
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
//                         backgroundColor: "#fff",
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
//                       name="name"
//                       type={"name"}
//                       value={inputs.name}
//                       onChange={handleChange}
//                       fullWidth
//                       label="enter your name"
//                       placeholder="Enter your name"
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
//                     />
//                   </Grid>
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
//                           color: "#fff",
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
//                   <Grid item>
//                     <TextField
//                       fullWidth
//                       type="cfrmpassword"
//                       name="cnfrmpasswordcnfrmpassword"
//                       value={inputs.password}
//                       onChange={handleChange}
//                       label="ConfirmPassword"
//                       placeholder="ConfirmPassword"
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
//                       />
//                       </Grid>
             
//                   <Grid item>
//                     <div style={{ display: "flex", justifyContent: "center" }}>
//                       <Button
//                         type="submit"
//                         variant="contained"
//                         style={{
//                           backgroundColor: "#fff",
//                           border: "2px solid #FF5F1",
//                           color: "black",
//                         }}
//                         endIcon={<LoginIcon />}
//                       >
//                         Signup
//                       </Button>
//                     </div>
//                   </Grid>
//                    <Link
//                     href="/login"
//                     style={{
//                       display: "block",
//                       textAlign: "center",
//                       color: "white",
//                     }}
//                   >
//                     Please Login
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

import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
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
  Button
  
} from "@mui/material";
import { Link } from 'react-router-dom';
import axios from "axios";

import { Visibility, VisibilityOff } from "@mui/icons-material";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const SignUp = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const sendRequest = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/signup", data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      sendRequest(values);
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
              border: '1px solid #ccc',
              borderRadius: 10,
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              bgcolor: '#fff',
            }}
          >
            <Typography variant="h4" textAlign={"center"} sx={{ mb: 4 }}>
              Sign up
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
           <FormLabel sx={{ mt: 2 }}>Confirm Password</FormLabel>
<TextField
  fullWidth
  margin="normal"
  variant="standard"
  name="confirmPassword"
  type={showConfirmPassword ? "text" : "password"}
  value={formik.values.confirmPassword}
  onChange={formik.handleChange}
  error={
    formik.touched.confirmPassword &&
    Boolean(formik.errors.confirmPassword)
  }
  helperText={
    formik.touched.confirmPassword &&
    formik.errors.confirmPassword
  }
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
  <Link to="/user/login">Login</Link>
</p>


</Box>
</FormGroup>
</FormControl>
</div>

);
}


export default SignUp;

             
