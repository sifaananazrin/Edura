import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
} from "@mui/material";

function OTP() {
  const [otp, setOTP] = useState("");

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  const handleOTPSubmit = (event) => {
    event.preventDefault();
    console.log("OTP submitted: ", otp);
  };

  return (
    <div
    style={{
      //   backgroundImage: 'url(https://ecommerce-platforms.com/wp-content/uploads/2020/04/online-learning-platforms-social.png)',

      backgroundImage:
        "url(https://plugins.miniorange.com/wp-content/uploads/2022/03/otp.webp)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      height: "100vh",
      margin: 0,
      padding: 0,
    }}
  >
    <Container maxWidth="sm">
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <h1>Enter your OTP</h1>
        </Grid>
        <Grid item>
          <form onSubmit={handleOTPSubmit}>
            <TextField
              label="OTP"
              variant="outlined"
              type="text"
              value={otp}
              onChange={handleOTPChange}
              inputProps={{
                style: {
                  fontSize: "2rem",
                  textAlign: "center",
                  letterSpacing: "1rem",
                  backgroundColor: " white",
                },
              }}
            />
           
          </form>
         
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
                      
                    >
                    Verify
                    </Button>
                  </div>
                </Grid>
      </Grid>
    </Container>
    </div>
  );
}

export default OTP;