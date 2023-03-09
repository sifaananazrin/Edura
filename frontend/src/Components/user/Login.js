import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Box,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import Avatar from "@mui/material/Avatar";
import SchoolIcon from "@mui/icons-material/School";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    // name:"",
    email: "",
    pass: "",
    showPass: false,
  });

  const sendReguest = async (e) => {
    try {
      console.log(inputs);
      const res = await axios.post("http://localhost:5000/api/login", {
        email: inputs.email,
        password: inputs.password,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.name, "value", e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation on the form data here
    // console.log(inputs);
    // Send the form data to the server here using AJAX or navigate to a new page

    sendReguest().then(() => history("/welcome"));
  };
  const handlePassVisibility = () => {
    setInputs({
      ...inputs,
      showPass: !inputs.showPass,
    });
  };

  return (
    <div
      style={{
        //   backgroundImage: 'url(https://ecommerce-platforms.com/wp-content/uploads/2020/04/online-learning-platforms-social.png)',

        backgroundImage:
          "url(https://cdndatastatic.myclassboard.com/Live_Classes/Assets/img/hero/heroimage.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Content goes here */}

      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Box sx={{ maxWidth: 600, margin: "0 auto" }}>
            <Paper
              elevation={2}
              sx={{ padding: 5, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
            >
              {/* Content goes here */}

              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  direction={"column"}
                  spacing={2}
                  style={{ color: "#fff" }}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Avatar
                      style={{
                        height: "100px",
                        width: "100px",
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      <SchoolIcon
                        style={{
                          fontSize: "5rem",
                          color: "rgba(255, 95, 31, 0.5)",
                        }}
                      />
                    </Avatar>
                  </Box>
                  <Grid item style={{ color: "red" }}>
                    <TextField
                      name="email"
                      type={"email"}
                      value={inputs.email}
                      onChange={handleChange}
                      fullWidth
                      label="enter your email"
                      placeholder="Email Address"
                      variant="outlined"
                      inputProps={{
                        style: {
                          backgroundColor: "transparent",
                          color: "#FF5F1F",
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "rgba(0, 0, 0, 0.5)" },
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      fullWidth
                      type="password"
                      name="password"
                      value={inputs.password}
                      onChange={handleChange}
                      label="Password"
                      placeholder="Password"
                      variant="outlined"
                      inputProps={{
                        style: {
                          backgroundColor: "transparent",
                          color: "#FF5F1F",
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "rgba(0, 0, 0, 0.5)" },
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handlePassVisibility}
                              edge="end"
                            >
                              {inputs.showPass ? (
                                <VisibilityOffIcon />
                              ) : (
                                <VisibilityIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                        type: inputs.showPass ? "text" : "password",
                      }}
                    />
                  </Grid>
                  {/* <Grid item style={{ color: "red" }}>
                  <TextField
                    type="cnfmPassword"
                    fullWidth
                    label="CnfmPassword"
                    placeholder="cnfmPassword"
                    variant="outlined"
                    inputProps={{
                      style: {
                        backgroundColor: "transparent",
                        color: "#FF5F1F",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "rgba(0, 0, 0, 0.5)" },
                    }}
                  />
                </Grid> */}
                  <Grid item>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        type="submit"
                        variant="contained"
                        style={{
                          backgroundColor: " rgba(255, 95, 31, 0.5)",
                          border: "2px solid #FF5F1F",
                          color: "black",
                        }}
                        endIcon={<LoginIcon />}
                      >
                        Login
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Box>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
