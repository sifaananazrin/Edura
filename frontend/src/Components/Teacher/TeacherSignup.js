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
  MenuItem,
  Select,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import Avatar from "@mui/material/Avatar";
import GirlIcon from "@mui/icons-material/Girl";

function TeacherLogin() {
  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });
  const [qualification, setQualification] = useState("");

  const handlePassVisibility = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email: values.email, pass: values.pass, qualification });
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://ecommerce-platforms.com/wp-content/uploads/2020/04/online-learning-platforms-social.png)",

        backgroundImage: "url(8600.jpg)",
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

              <Grid
                container
                direction={"column"}
                spacing={2}
                style={{ color: "#fff" }}
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Avatar
                    style={{
                      height: "100px",
                      width: "100px",
                      backgroundColor: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    <GirlIcon
                      style={{
                        fontSize: "5rem",
                        color: "rgba(255, 95, 31, 0.5)",
                      }}
                    />
                  </Avatar>
                </Box>
                <Grid item style={{ color: "red" }}>
                  <TextField
                    type="name"
                    fullWidth
                    label="enter your name"
                    placeholder="name"
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
                <Grid item style={{ color: "red" }}>
                  <TextField
                    type="email"
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
                          <IconButton onClick={handlePassVisibility} edge="end">
                            {values.showPass ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                      type: values.showPass ? "text" : "password",
                    }}
                  />
                </Grid>
                <Grid item>
              
                  <Select
                    fullWidth
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    label="Qualification"
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
                  >
                   
                    <MenuItem value=" " disabled>
                      Select a qualification
                    </MenuItem>
                    <MenuItem value="highschool">High School</MenuItem>
                    <MenuItem value="undergrad">Undergraduate</MenuItem>
                    <MenuItem value="graduate">Graduate</MenuItem>
                  </Select>
                </Grid>

                <Grid item>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
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
            </Paper>
          </Box>
        </Grid>
      </Container>
    </div>
  );
}

export default TeacherLogin;
