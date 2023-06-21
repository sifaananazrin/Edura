import React, { useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/request";
import { Button, Container, Grid, TextField } from "@mui/material";



function OTP() {

  const [otp, setOTP] = useState("");
  const [err, setError] = useState("");

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  const sendRequest = async () => {
    try {
      const response = await axios.post(
      requests.Otp
      ,
        { otp }
      );
      if (response.data.err) {
        setError(response.data.err);
      } else if (response.data.success) {
       window.location="/user/login"
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOTPSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log("OTP submitted: ", otp);
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://plugins.miniorange.com/wp-content/uploads/2022/03/otp.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "70vh",
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
                onClick={handleOTPSubmit}
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
